# PatientApp

A React Native (Expo Router) patient dashboard app built with an MVVM-style feature architecture.

## Information

The app was created with the information provided in documents, I did my best to include graph, the app is also at the created to begin support for iOS and Android

## Usage

1. Install dependencies:

```bash
npm install
```

2. Run the app:

```bash
npm run start
```

3. Useful scripts:

```bash
npm run lint
npm test
npm run start:storybook
npm run storybook-generate
```

- `start:storybook` enables Storybook metro integration (`EXPO_PUBLIC_STORYBOOK_ENABLED=true`).

## Architecture (MVVM)

The app is organized by feature and layer:

- **View**: screens and UI components (`src/features/*/screens`, `src/features/*/components`)
- **ViewModel**: hooks that manage state and UI actions (`src/features/*/viewmodels`)
- **Model/Data**: typed models, repositories, and services (`src/features/*/models|data|services`)

### Current feature

`src/features/patient-dashboard` includes:

- patient summary
- lab results cards
- biomarker trend chart
- disclaimer banner for AI-generated insights context

### Key folders

- `app/` — Expo Router routes
- `src/design-system/` — reusable UI primitives/components
- `src/features/` — feature modules (MVVM)
- `storybook/stories/` — reusable component stories
- `docs/` — architecture and component usage notes

## Notes

- Trend chart is platform-aware:
  - Web uses Recharts
  - Native uses a fallback native chart component
