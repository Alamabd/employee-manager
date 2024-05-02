import { Router } from "express";
import { deleteEmployee, getEmployee, insertEmployee } from "../controllers/employeeController.js";

const route = Router();

route.post('/', (req, res) => {
    insertEmployee(req.body, result => {
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

route.delete('/', (req, res) => {
    deleteEmployee(req.body, result => {
        res.status(result.statuscode);
        res.json(result.body);
    })
})

export default route;