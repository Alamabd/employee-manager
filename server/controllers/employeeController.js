import { ObjectId } from "mongodb";
import db from "../db/connection.js";
import Joi from "joi";

const employeeSchema = Joi.object({
    name: Joi.string().required().min(4).max(16),
    position: Joi.string().required()
})

export const insertEmployee = async (query, result) => {
    const { error } = employeeSchema.validate(query);
    if(!error) {
        const response = await db.collection("employee").insertOne(query);
        result({
            body: {
                message: "data added successfully",
                data: response,
            },
            statuscode: 200
        });
    } else {
        result({
            body: {
                message: "data failed to add",
                error: error
            },
            statuscode: 400
        });
    }
}

export const getEmployee = async ({id}, result) => {
    try {
        const response = await db.collection("employee").find(id ? {_id: new ObjectId(id)} : {}).toArray();
        result({
            body: {
                message: "data get successfully",
                data: response,
            },
            statuscode: 200
        });
    } catch (error) {
        result({
            body: {
                message: "data failed to get",
                error: error
            },
            statuscode: 400
        });
    }
}

export const deleteEmployee = async (query, result) => {
    const { id } = query;
    try {
        const response = await db.collection("employee").deleteOne({
            _id: new ObjectId(id)
        });
        result({
            body: {
                message: "data delete successfully",
                data: response,
            },
            statuscode: 200
        });
    } catch (error) {
        result({
            body: {
                message: "data failed to delete",
                error: error
            },
            statuscode: 400
        });
    }
}

export const updateEmployee = async (query, result) => {
    const { id, name, position } = query;
    try {
        const response = await db.collection("employee").updateOne(
            {
                _id: new ObjectId(id)
            },
            {
                $set: {name, position}
            }
        );
        result({
            body: {
                message: "data update successfully",
                data: response,
            },
            statuscode: 200
        });
    } catch (error) {
        result({
            body: {
                message: "data failed to update",
                error: error
            },
            statuscode: 400
        });
    }
}
