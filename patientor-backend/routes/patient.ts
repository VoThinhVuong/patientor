import { Router } from "express";
import patientService from "../services/patientService";
import { toNewPatientEntry } from "../utils";
import { z } from 'zod';

const patientRoute = Router();

patientRoute.get('/',(_req, res) => {
    res.json(patientService.getNonSensitiveEntries());
});

patientRoute.get('/:id',(_req, res) => {
  const id : string = _req.params.id;
  const patient = patientService.getPatient(id);
  if(patient)
    res.json(patient);
  else
    res.status(404).json({error: "patient not found"});
});


patientRoute.post('/',(_req, res) => {
    try{
        const newPatienEntry = toNewPatientEntry(_req.body);

        const newPatient = patientService.addPatient(newPatienEntry);
        res.json(newPatient);
    }
    catch (error: unknown) {
        if (error instanceof z.ZodError) {
          res.status(400).send({ error: error.issues });
        } else {
          res.status(400).send({ error: 'unknown error' });
        }
    }
});

export default patientRoute;