import { Patient, NoSsnPatient } from "../types";
import patientData from '../data/patients';

const patients : Patient[] = patientData as Patient[];

const getEntries = (): Patient[] => {
    return patients;
};

const getNoSsnEntries = (): NoSsnPatient[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({id, name, dateOfBirth, gender, occupation}));
};


export default {
    getEntries,
    getNoSsnEntries
};