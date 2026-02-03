import { type BiomarkerId } from "@/src/features/patient-dashboard/models/patientDashboard.types";

export interface TrendChartProps {
  selectedBiomarker: BiomarkerId;
  trendData: { label: string; value: number }[];
  onSelectBiomarker: (biomarkerId: BiomarkerId) => void;
}

