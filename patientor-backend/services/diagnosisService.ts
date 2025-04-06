import { Diagnosis } from "../types";
import diagosisData from '../data/diagnoses';

const diagnosesEntries : Diagnosis[] = diagosisData as Diagnosis[];

const getEntries = () : Diagnosis[] => {
    return diagnosesEntries;
};

export default {
    getEntries
};