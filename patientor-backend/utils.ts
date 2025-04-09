import { NewPatient, Gender } from "./types";
import { z } from 'zod';

export const toNewPatientEntry = (object: unknown) : NewPatient => {
    if (!object || typeof object !== 'object'){
        throw new Error('Incorrect of missing data');
    };

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object){

        const { name, dateOfBirth, ssn, gender, occupation } = object;

        const newEntry = {
            name: z.string().parse(name),
            dateOfBirth: z.string().date().parse(dateOfBirth),
            ssn: z.string().parse(ssn),
            gender: z.nativeEnum(Gender).parse(gender),
            occupation: z.string().parse(occupation)
        };

        return newEntry;
    };

    throw new Error('Incorrect data: some fields are missing');
};