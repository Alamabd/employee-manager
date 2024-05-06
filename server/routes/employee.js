import { Router } from "express";
import { deleteEmployee, getEmployee, insertEmployee, updateEmployee } from "../controllers/employeeController.js";

const route = Router();

route.post('/', insertEmployee);
route.get('/', getEmployee);
route.delete('/', deleteEmployee);
route.put('/', updateEmployee);

export default route;