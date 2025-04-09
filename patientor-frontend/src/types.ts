interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis['code']>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface SickLeave  {
  startDate: string,
  endDate: string
}

interface Discharge  {
  date: string,
  criteria: string
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: 'OccupationalHealthcare';
  employerName: string;
  sickLeave?: SickLeave;
}

interface HospitalEntry extends BaseEntry {
  type: 'Hospital';
  discharge?: Discharge;
}


export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'Other'
}

export type Entry = HealthCheckEntry | OccupationalHealthcareEntry | HospitalEntry;

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}
export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;