import {
  MockPatientDashboardRepository,
  type PatientDashboardRepository,
} from "@/src/features/patient-dashboard/data/patientDashboardRepository";
import { type PatientDashboardData } from "@/src/features/patient-dashboard/models/patientDashboard.types";

const repository: PatientDashboardRepository = new MockPatientDashboardRepository();

export async function getPatientDashboardData(): Promise<PatientDashboardData> {
  return repository.getDashboardData();
}
