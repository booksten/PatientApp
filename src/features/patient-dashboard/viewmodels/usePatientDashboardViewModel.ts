import { useCallback, useEffect, useMemo, useState } from "react";

import { getPatientDashboardData } from "@/src/features/patient-dashboard/services/patientDashboardService";
import {
  type BiomarkerId,
  type LabResult,
  type PatientSummary,
} from "@/src/features/patient-dashboard/models/patientDashboard.types";

interface PatientDashboardViewModel {
  isLoading: boolean;
  errorMessage: string | null;
  patient: PatientSummary | null;
  labResults: LabResult[];
  selectedBiomarker: BiomarkerId;
  disclaimerText: string;
  trendData: Array<{ label: string; value: number }>;
  setSelectedBiomarker: (biomarkerId: BiomarkerId) => void;
  reload: () => Promise<void>;
}

const defaultBiomarker: BiomarkerId = "hba1c";

export function usePatientDashboardViewModel(): PatientDashboardViewModel {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [patient, setPatient] = useState<PatientSummary | null>(null);
  const [labResults, setLabResults] = useState<LabResult[]>([]);
  const [selectedBiomarker, setSelectedBiomarker] =
    useState<BiomarkerId>(defaultBiomarker);
  const [trendPoints, setTrendPoints] = useState<
    Array<{ biomarkerId: BiomarkerId; measuredAtIso: string; value: number }>
  >([]);

  const reload = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);

      const dashboardData = await getPatientDashboardData();
      setPatient(dashboardData.patient);
      setLabResults(dashboardData.labResults);
      setTrendPoints(dashboardData.trendPoints);
    } catch {
      setErrorMessage("Unable to load patient dashboard data.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void reload();
  }, [reload]);

  const trendData = useMemo(() => {
    return trendPoints
      .filter((point) => point.biomarkerId === selectedBiomarker)
      .sort((a, b) => a.measuredAtIso.localeCompare(b.measuredAtIso))
      .map((point) => ({
        label: new Date(point.measuredAtIso).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        value: point.value,
      }));
  }, [selectedBiomarker, trendPoints]);

  return {
    isLoading,
    errorMessage,
    patient,
    labResults,
    selectedBiomarker,
    disclaimerText:
      "AI-powered insights are informational only and are not medical advice.",
    trendData,
    setSelectedBiomarker,
    reload,
  };
}
