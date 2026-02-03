# PatientApp Architecture (MVVM)

## Layers
- **View**: React Native screens/components under `src/features/*/screens` and `src/features/*/components`.
- **ViewModel**: Hooks under `src/features/*/viewmodels` that manage state and UI actions.
- **Model/Data**: Typed models, repositories, and services under `src/features/*/models|data|services`.

## Patient Dashboard Flow
1. `PatientDashboardScreen` calls `usePatientDashboardViewModel()`.
2. The ViewModel calls `getPatientDashboardData()`.
3. Service delegates to `PatientDashboardRepository` (currently `MockPatientDashboardRepository`).
4. ViewModel exposes display-ready state (`trendData`, loading, errors, selected biomarker).

## Why this scales
- Data source swaps are isolated to repository/service.
- UI remains reusable and presentational.
- Business/UI orchestration stays testable in ViewModel hooks.
