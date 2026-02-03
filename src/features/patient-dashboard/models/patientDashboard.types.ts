export type BiomarkerId = "hba1c" | "ldl" | "hdl";

export type BiomarkerStatus = "normal" | "warning" | "critical";

export interface PatientSummary {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  lastUpdatedIso: string;
}

export interface LabResult {
  id: string;
  biomarkerId: BiomarkerId;
  biomarkerLabel: string;
  value: number;
  unit: string;
  referenceRange: string;
  measuredAtIso: string;
  status: BiomarkerStatus;
}

export interface BiomarkerTrendPoint {
  biomarkerId: BiomarkerId;
  measuredAtIso: string;
  value: number;
}

export interface PatientDashboardData {
  patient: PatientSummary;
  labResults: LabResult[];
  trendPoints: BiomarkerTrendPoint[];
}
