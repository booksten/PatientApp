import { useState } from "react";

import { TrendChart } from "../../src/features/patient-dashboard/components/TrendChart";
import { type BiomarkerId } from "../../src/features/patient-dashboard/models/patientDashboard.types";

export default {
  title: "Patient Dashboard/TrendChart",
  component: TrendChart,
};

function TrendChartStory() {
  const [selectedBiomarker, setSelectedBiomarker] = useState<BiomarkerId>("hba1c");

  const trendDataByBiomarker: Record<BiomarkerId, { label: string; value: number }[]> = {
    hba1c: [
      { label: "Jul 1", value: 7.4 },
      { label: "Oct 1", value: 7.0 },
      { label: "Jan 30", value: 6.8 },
    ],
    ldl: [
      { label: "Jul 1", value: 130 },
      { label: "Oct 1", value: 124 },
      { label: "Jan 30", value: 118 },
    ],
    hdl: [
      { label: "Jul 1", value: 50 },
      { label: "Oct 1", value: 55 },
      { label: "Jan 30", value: 58 },
    ],
  };

  return (
    <TrendChart
      selectedBiomarker={selectedBiomarker}
      trendData={trendDataByBiomarker[selectedBiomarker]}
      onSelectBiomarker={setSelectedBiomarker}
    />
  );
}

export const Default = {
  render: () => <TrendChartStory />,
};
