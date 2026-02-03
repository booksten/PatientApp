import { mockPatientDashboardData } from "@/src/features/patient-dashboard/data/mockPatientDashboardData";
import { type PatientDashboardData } from "@/src/features/patient-dashboard/models/patientDashboard.types";

export interface PatientDashboardRepository {
  getDashboardData(): Promise<PatientDashboardData>;
}

export class MockPatientDashboardRepository implements PatientDashboardRepository {
  async getDashboardData(): Promise<PatientDashboardData> {
    await new Promise((resolve) => setTimeout(resolve, 150));
    return mockPatientDashboardData;
  }
}
