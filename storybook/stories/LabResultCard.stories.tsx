import { LabResultCard } from "../../src/features/patient-dashboard/components/LabResultCard";

export default {
  title: "Patient Dashboard/LabResultCard",
  component: LabResultCard,
};

export const Warning = {
  render: () => (
    <LabResultCard
      result={{
        id: "lab-1",
        biomarkerId: "hba1c",
        biomarkerLabel: "HbA1c",
        value: 6.8,
        unit: "%",
        referenceRange: "4.0 - 5.6 %",
        measuredAtIso: "2026-01-30T08:00:00.000Z",
        status: "warning",
      }}
    />
  ),
};

export const Normal = {
  render: () => (
    <LabResultCard
      result={{
        id: "lab-2",
        biomarkerId: "hdl",
        biomarkerLabel: "HDL Cholesterol",
        value: 58,
        unit: "mg/dL",
        referenceRange: "> 40 mg/dL",
        measuredAtIso: "2026-01-30T08:00:00.000Z",
        status: "normal",
      }}
    />
  ),
};
