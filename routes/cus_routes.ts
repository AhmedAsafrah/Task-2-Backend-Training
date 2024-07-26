
import { Router, Request, Response } from "express";
import { createCustomer, removeSingleCustomer, editCustomer, getSingleCustomer, getAllCustomers} from "../controller/Controller.js";
const router = Router();


router.post("/", async(req: Request, res: Response) => {

    const payload = req.body;

    if(!payload.name || !payload.mobilePhone || !payload.balance) {
        res.json({
            msg : "Please provide all the required fields",
            success : false
        })
    }

    try {
        const customer = await createCustomer(payload);

        res.json({
            msg : "Customer created successfully 😀",
            success : true,
        })

    } catch (error) {

        console.log("Error while creating customer" + error);
    }
})

router.delete("/:id", async(req: Request, res: Response) => {

    const id = Number(req.params.id);

    try {
        const customer = await removeSingleCustomer(id);
        res.json({
            msg : "Customer removed successfully 😀",
            success : true
        })
    } catch (error) {
        console.log("Error while removing customer" + error);
    }
})

router.put("/:id", async(req: Request, res: Response) => {

    const id = Number(req.params.id);
    const payload = req.body;

    try {
        const task = await editCustomer(id, payload);
        res.json({
            msg : "Customer updated successfully 😀",
            success : true
        })
    } catch (error) {
        console.log("Error while updating customer" + error);
    }
})

router.get("/:id", async(req: Request, res: Response) => {

    try {
        const id = Number(req.params.id);
        const customer = await getSingleCustomer(id);
        res.json({
            msg : "Customer fetched successfully 😀",
            success : true,
            data : customer
        })

    } catch (error) {
        console.log("Error while fetching customer" + error);
    }
 
})

router.get("/", async(req: Request, res: Response) => {
    
    try {
        const customers = await getAllCustomers();
        res.json({
            msg : "Customers fetched successfully 😀",
            success : true,
            data : customers
        })

    } catch (error) {
        console.log("Error while fetching customers" + error);
    }
})


export default router;