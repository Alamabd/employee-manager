import { ObjectId } from "mongodb";
import db from "../db/connection.js";

class EmployeeModel {
    constructor() {
        this.collection = db.collection('employee');
    }
    
    /**
     * @param {object} data
     * @property {string} name
     * @property {string} position
     */
    async insert(data) {
        try {
            const result = await this.collection.insertOne(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @param {string} id?
     */
    async find(id) {
        try {
            const result = await this.collection.find(id ? {_id: new ObjectId(id)} : {}).toArray();
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @param {string} id 
     */
    async delete(id) {
        try {
            const result = await this.collection.deleteOne({_id: new ObjectId(id)});
            return result;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @param {object} data
     * @property {string} id
     * @property {string} name
     * @property {string} position
     */
    async update(data) {
        const { id, name, position } = data;
        try {
            const result = await this.collection.updateOne(
                {
                    _id: new ObjectId(id)
                },
                {
                    $set: {name, position}
                }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default EmployeeModel;