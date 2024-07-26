
import { Request, Response, Express } from 'express';
import { Customer } from '../db/entites/Customer.js';


const createCustomer = async (payload : Customer) => {

    const customer = await Customer.findOne({
        where : {
            name : payload.name,
            mobilePhone : payload.mobilePhone,
            balance : payload.balance
        }
    });
    // will change when we use handlebars
    if(customer) {
        return {
            msg : "Customer already exists",
            success : false
        }
    }

    const newCustomer = Customer.create(payload);
    return newCustomer.save();
}

const removeSingleCustomer = async (id : number) => {

    const customer = await Customer.findOne({where : {id : id}});
    if(!customer) { // will change when we use handlebars
        return {
            msg : "Customer not found",
            success : false
        }
    }

    return customer.remove();
}
const editCustomer = async (id : number, payload : Customer) => {

    const customer = await Customer.findOne({where : {id : id}});

    if(!customer) { // will change when we use handlebars
        return {
            msg : "Customer not found",
            success : false
        }
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
        return {
            msg : "Customer not found",
            success : false
        }
    }
    return customer;
}

const getAllCustomers = async () => {
    return Customer.find();
}

export { createCustomer, removeSingleCustomer, editCustomer, getSingleCustomer, getAllCustomers }