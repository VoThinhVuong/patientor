import { Patient, NonSensitivePatient, NewPatient, Entry } from "../types";
import patientData from '../data/patients';
import { v1 as uuid } from "uuid";

const patients : Patient[] = patientData;

const getPatient = (id: string): Patient | undefined => {
    const patient = patients.find(patient => patient.id === id);
    return patient;
};

const getEntries = (): Patient[] => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatient[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation, entries}) => ({id, name, dateOfBirth, gender, occupation, entries}));
};

const addPatient = ( newPatient: NewPatient ): Patient => {
    const newPatienEntry = {
        ...newPatient,
        id: uuid(),
        entries: [] as Entry[]
    };
    patients.push(newPatienEntry);
    return newPatienEntry;
};

export default {
    getEntries,
    getNonSensitiveEntries,
    addPatient,
    getPatient
};