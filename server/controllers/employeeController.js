import Joi from "joi";
import EmployeeModel from "../models/employeeModel.js";

const employeeSchema = Joi.object({
    name: Joi.string().required().min(2).max(16),
    position: Joi.string().required()
})

const UpdateEmployeeSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required().min(2).max(16),
    position: Joi.string().required()
})

const model = new EmployeeModel();

export async function insertEmployee(req, res) {
    const body = req.body;
    const { error } = employeeSchema.validate(body);
    try {
        const response = await model.insert(body);
        if(!error || response) {
            res.send({
                message: "data added successfully",
                data: response,
            });
            res.status(200);
        } else {
            throw new Error();
        }
    } catch {
        res.send({
            message: "data failed to insert",
            error: error
        });
        res.status(400);   
    }
}

export async function getEmployee(req, res) {
    const { id } = req.query;
    try {
        const response = await model.find(id);
        if(response) {
            res.send({
                message: "get data successfully",
                data: response,
            });
            res.status(200);
        } else {
            throw new Error();
        }
    } catch {
        res.send({
            message: "failed to get data",
        });
        res.status(400);
    }   
}

export async function deleteEmployee(req, res) {
    const { id } = req.body;
    try {
        const response = await model.delete(id);
        if(response) {
            res.send({
                message: "delete data successfully",
                data: response,
            });
            res.status(200);
        } else {
            throw new Error();
        }
    } catch (error) {
        res.send({
            message: "failed to delete data",
        });
        res.status(400);
    }
}

export async function updateEmployee(req, res) {
    const body = req.body;
    const { error } = UpdateEmployeeSchema.validate(body);
    try {
        const response = await model.update(body);
        if(!error || response) {
            res.send({
                message: "update data successfully",
                data: response,
            });
            res.status(200);
        } else {
            throw new Error();
        }
    } catch (error) {
        res.send({
            message: "failed to update data",
        });
        res.status(400);
    }
}
