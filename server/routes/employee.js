import { Router } from "express";
import { getEmployee, insertEmployee } from "../controllers/employeeController.js";

const route = Router();

route.post('/', (req, res) => {
    const query = req.body;
    insertEmployee(query, (result) => {
        res.status(result.statuscode);
        res.json(result.body);
    });
})

route.get('/', (req, res) => {
    getEmployee(result => {
        res.status(result.statuscode);
        res.json(result.body);
    })
})

export default route;