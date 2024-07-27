
import { Request, Response, Express } from 'express';
import { Customer } from '../db/entites/Customer.js';
import { AppError } from '../errors/AppErrors.js';


const createCustomer = async (payload : Customer) => {

    const customer = await Customer.findOne({
        where : {
            name : payload.name,
            mobilePhone : payload.mobilePhone,
            balance : payload.balance
        }
    });
    if(customer) {
        throw new AppError("Customer already exists", 409, true);
    }

    const newCustomer = Customer.create(payload);
    return newCustomer.save();
}

const removeSingleCustomer = async (id : number) => {

    const customer = await Customer.findOne({where : {id : id}});
    if(!customer) { 
        throw new AppError("Customer not found", 404, true);
    }

    return customer.remove();
}
const editCustomer = async (id : number, payload : Customer) => {

    const customer = await Customer.findOne({where : {id : id}});

    if(!customer) {
        throw new AppError("Customer not found", 404, true)
    }

    if(payload.name) {
        customer.name = payload.name;
    }

    if(payload.mobilePhone) {
        customer.mobilePhone = payload.mobilePhone;
    }

    if(payload.balance) {
        customer.balance = payload.balance;
    }

    return customer.save();
}


const getSingleCustomer = async (id:number) => {

    const customer = await Customer.findOne({where : {id : id}});

    if(!customer) { // will change when we use handlebars
        throw new AppError("Customer not found", 404, true);
    }
    return customer;
}

const getAllCustomers = async (req: Request ,res : Response) => {
    const customers = await Customer.find();
    res.json({
        message: "getting all customers successfully",
        status: true,
        customers
    })
}


export { createCustomer, removeSingleCustomer, editCustomer, getSingleCustomer, getAllCustomers }