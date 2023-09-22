import { RequestHandler } from 'express';
import User from '../../models/User';

export const postUserController: RequestHandler = async (req, res, next) => {
    try {
        var data = req.data
        const user = new User({
            username: data.username,
            email: data.email,
            password: await Bun.password.hash(data.password),
            role: "user"
        });
    
        await user.save();
        res.status(201).json({ success: true, user });
    } catch (err) {
        next(err);
    }
}