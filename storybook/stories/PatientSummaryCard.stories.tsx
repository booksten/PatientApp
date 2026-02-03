import { PatientSummaryCard } from "../../src/features/patient-dashboard/components/PatientSummaryCard";

export default {
  title: "Patient Dashboard/PatientSummaryCard",
  component: PatientSummaryCard,
};

export const Default = {
  render: () => (
    <PatientSummaryCard
      patient={{
        id: "p-1042",
        firstName: "Alex",
        lastName: "Miller",
        age: 52,
        lastUpdatedIso: "2026-01-30T16:45:00.000Z",
      }}
    />
  ),
};
