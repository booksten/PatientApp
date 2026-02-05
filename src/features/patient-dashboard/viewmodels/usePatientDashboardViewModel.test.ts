import { act, renderHook, waitFor } from "@testing-library/react-native";

import { getPatientDashboardData } from "@/src/features/patient-dashboard/services/patientDashboardService";
import { usePatientDashboardViewModel } from "@/src/features/patient-dashboard/viewmodels/usePatientDashboardViewModel";

jest.mock(
  "@/src/features/patient-dashboard/services/patientDashboardService",
  () => ({
    getPatientDashboardData: jest.fn(),
  }),
);

const mockGetPatientDashboardData =
  getPatientDashboardData as jest.MockedFunction<
    typeof getPatientDashboardData
  >;

describe("usePatientDashboardViewModel", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("loads data and exposes default biomarker trend", async () => {
    mockGetPatientDashboardData.mockResolvedValue({
      patient: {
        id: "p-1",
        firstName: "Alex",
        lastName: "Miller",
        age: 52,
        bloodType: "O+",
        lastUpdatedIso: "2026-01-30T12:00:00.000Z",
      },
      labResults: [
        {
          id: "lab-1",
          biomarkerId: "hba1c",
          biomarkerLabel: "HbA1c",
          value: 6.8,
          unit: "%",
          referenceRange: "4.0 - 5.6 %",
          measuredAtIso: "2026-01-30T12:00:00.000Z",
          status: "warning",
        },
      ],
      trendPoints: [
        {
          biomarkerId: "hba1c",
          measuredAtIso: "2026-01-20T12:00:00.000Z",
          value: 6.7,
        },
        {
          biomarkerId: "hba1c",
          measuredAtIso: "2026-01-10T12:00:00.000Z",
          value: 6.4,
        },
        {
          biomarkerId: "ldl",
          measuredAtIso: "2026-01-10T12:00:00.000Z",
          value: 110,
        },
      ],
    });

    const { result } = renderHook(() => usePatientDashboardViewModel());

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.patient?.id).toBe("p-1");
    expect(result.current.selectedBiomarker).toBe("hba1c");
    expect(result.current.trendData.map((point) => point.value)).toEqual([
      6.4, 6.7,
    ]);
    expect(result.current.bloodSugarHistoryData.map((point) => point.value)).toEqual([
      137, 146,
    ]);
    expect(result.current.errorMessage).toBeNull();
  });

  it("updates trend when selected biomarker changes", async () => {
    mockGetPatientDashboardData.mockResolvedValue({
      patient: {
        id: "p-1",
        firstName: "Alex",
        lastName: "Miller",
        age: 52,
        bloodType: "O+",
        lastUpdatedIso: "2026-01-30T12:00:00.000Z",
      },
      labResults: [],
      trendPoints: [
        {
          biomarkerId: "hba1c",
          measuredAtIso: "2026-01-10T12:00:00.000Z",
          value: 6.4,
        },
        {
          biomarkerId: "ldl",
          measuredAtIso: "2026-01-10T12:00:00.000Z",
          value: 110,
        },
      ],
    });

    const { result } = renderHook(() => usePatientDashboardViewModel());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    act(() => {
      result.current.setSelectedBiomarker("ldl");
    });

    expect(result.current.trendData.map((point) => point.value)).toEqual([110]);
  });

  it("surfaces an error state when load fails", async () => {
    mockGetPatientDashboardData.mockRejectedValue(new Error("network"));

    const { result } = renderHook(() => usePatientDashboardViewModel());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.errorMessage).toBe(
      "Unable to load patient dashboard data.",
    );
    expect(result.current.patient).toBeNull();
    expect(result.current.labResults).toEqual([]);
  });
});
