import { Router } from "express";
import { insertEmployee } from "../controllers/employeeController.js";

const route = Router();

route.post('/employee', (req, res) => {
    const query = req.body;

    insertEmployee(query, (result) => {
        res.status(result.statuscode);
        res.send(result.body);
    });
})

export default route;