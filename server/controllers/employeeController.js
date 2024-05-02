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