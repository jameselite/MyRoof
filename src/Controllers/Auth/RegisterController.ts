import { RegisterService } from "../../Services/Auth/AddUserService";
import type { Request, Response } from "express";

export const RegisterController = async (req: Request, res: Response): Promise<void> => {
    try {

        const { fullname, email, password } = req.body;

        const user : string = await RegisterService(fullname, email, password);
        
        res.status(201).json({ message: user });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
}