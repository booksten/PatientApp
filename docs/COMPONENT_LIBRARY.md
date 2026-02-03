# Component Library Notes

## Reusable components

### `PatientSummaryCard`
- **Path**: `src/features/patient-dashboard/components/PatientSummaryCard.tsx`
- **Purpose**: Show core patient summary metadata.
- **Props**: `patient: PatientSummary`.

### `LabResultCard`
- **Path**: `src/features/patient-dashboard/components/LabResultCard.tsx`
- **Purpose**: Display a single biomarker result and status.
- **Props**: `result: LabResult`.

### `TrendChart`
- **Path**: `src/features/patient-dashboard/components/TrendChart.tsx`
- **Purpose**: Show biomarker trend over time and allow biomarker selection.
- **Props**: selected biomarker, trend points, selection callback.

### `DisclaimerBanner`
- **Path**: `src/design-system/components/DisclaimerBanner.tsx`
- **Purpose**: Render patient-safe AI/automation disclaimer text.
- **Props**: `text: string`.

## Design-system base
- `Card` (`src/design-system/components/Card.tsx`) is the shared container primitive used by feature components.
