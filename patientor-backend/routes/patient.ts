import { Router } from "express";
import patientService from "../services/patientService";

const patientRoute = Router();

patientRoute.get('/',(_req, res) => {
    res.json(patientService.getNoSsnEntries());
});

export default patientRoute;