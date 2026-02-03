# Storybook Stories

Stories for the Ready RX reusable components are under:

- `storybook/stories/PatientSummaryCard.stories.tsx`
- `storybook/stories/LabResultCard.stories.tsx`
- `storybook/stories/TrendChart.stories.tsx`

These stories demonstrate the three reusable dashboard components required by the take-home prompt and can be used directly once Storybook is wired into the app runtime.

## Run

1. Start the app: `npm run start`
2. In the app, tap **Open Storybook** on the dashboard screen (route: `/storybook`).

If you add or move stories, regenerate Storybook requires file:

- `npm run storybook-generate`
