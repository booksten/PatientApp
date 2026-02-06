import {
  type BiomarkerTrendPoint,
  type LabResult,
  type PatientDashboardData,
  type PatientSummary,
} from "@/src/features/patient-dashboard/models/patientDashboard.types";

const patient: PatientSummary = {
  id: "p-1042",
  firstName: "Alex",
  lastName: "Miller",
  age: 52,
  bloodType: "O+",
  lastUpdatedIso: "2026-01-30T16:45:00.000Z",
};

const labResults: LabResult[] = [
  {
    id: "lab-1",
    biomarkerId: "hba1c",
    biomarkerLabel: "HbA1c",
    value: 6.8,
    unit: "%",
    referenceRange: "4.0 - 5.6 %",
    measuredAtIso: "2026-01-30T08:00:00.000Z",
    status: "warning",
  },
  {
    id: "lab-2",
    biomarkerId: "ldl",
    biomarkerLabel: "LDL Cholesterol",
    value: 118,
    unit: "mg/dL",
    referenceRange: "< 100 mg/dL",
    measuredAtIso: "2026-01-30T08:00:00.000Z",
    status: "warning",
  },
  {
    id: "lab-3",
    biomarkerId: "hdl",
    biomarkerLabel: "HDL Cholesterol",
    value: 58,
    unit: "mg/dL",
    referenceRange: "> 40 mg/dL",
    measuredAtIso: "2026-01-30T08:00:00.000Z",
    status: "normal",
  },
];

const trendPoints: BiomarkerTrendPoint[] = [
  {
    biomarkerId: "hba1c",
    measuredAtIso: "2025-07-01T08:00:00.000Z",
    value: 7.4,
  },
  {
    biomarkerId: "hba1c",
    measuredAtIso: "2025-10-01T08:00:00.000Z",
    value: 7.0,
  },
  {
    biomarkerId: "hba1c",
    measuredAtIso: "2026-01-30T08:00:00.000Z",
    value: 6.8,
  },
  {
    biomarkerId: "hba1c",
    measuredAtIso: "2026-02-30T08:00:00.000Z",
    value: 6.4,
  },
  { biomarkerId: "ldl", measuredAtIso: "2025-07-01T08:00:00.000Z", value: 130 },
  { biomarkerId: "ldl", measuredAtIso: "2025-10-01T08:00:00.000Z", value: 124 },
  { biomarkerId: "ldl", measuredAtIso: "2026-01-30T08:00:00.000Z", value: 118 },
  { biomarkerId: "ldl", measuredAtIso: "2026-02-30T08:00:00.000Z", value: 112 },
  { biomarkerId: "hdl", measuredAtIso: "2025-07-01T08:00:00.000Z", value: 50 },
  { biomarkerId: "hdl", measuredAtIso: "2025-10-01T08:00:00.000Z", value: 55 },
  { biomarkerId: "hdl", measuredAtIso: "2026-01-30T08:00:00.000Z", value: 58 },
  { biomarkerId: "hdl", measuredAtIso: "2026-02-30T08:00:00.000Z", value: 58 },
];

export const mockPatientDashboardData: PatientDashboardData = {
  patient,
  labResults,
  trendPoints,
};
