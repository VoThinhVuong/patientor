import { Router } from "express";
import diagnosisService from "../services/diagnosisService";

const diagnosisRoute = Router();

diagnosisRoute.get('/', (_req, res) => {
    res.json(diagnosisService.getEntries());
});

export default diagnosisRoute;