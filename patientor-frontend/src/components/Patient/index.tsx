import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Diagnosis, Patient } from '../../types';
import { useParams } from "react-router-dom";
import PatientService from '../../services/patients';

interface Props {
    diagnoses: Diagnosis[] | undefined | null
}

const PatientInfo = ({diagnoses} : Props) => {

    const [patient, setPatient] = useState<Patient | null>(null);
    

    const id = useParams().id as string;

    useEffect(() => {
        const fetch = async () => {
            const response = await PatientService.getPatient(id);
            setPatient(response);
        };

        void fetch();
    },[]);

    if(!patient) return(
        <div>
            Patient not found
        </div>
    );

    const findDiagnosis = (code: string) : string => {
        const data = diagnoses?.find(a => a.code === code);
        if (!data) return '';
        return data.name;
    };

    return(
        <Container>
            
            <h2>{patient.name} {
                patient.gender === 'female' ? 
                    <FemaleIcon /> 
                    :( patient.gender === 'male' ? <MaleIcon /> : null)
                }
            </h2>
            <div>ssn: {patient.ssn}</div>
            <div>occupation: {patient.occupation}</div>

            <h3>entries</h3>
            {patient.entries.map(entry =>
                <div key={entry.id}>
                    {entry.date} {entry.description}
                    <ul>
                        {entry.diagnosisCodes?.map(code => <li>{code} {findDiagnosis(code)}</li>)}
                    </ul>
                </div>
            )}
        </Container>
    );
};


export default PatientInfo;