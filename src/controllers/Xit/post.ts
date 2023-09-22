import { RequestHandler } from 'express';
import Xit from '../../models/Xit';

export const postXitController: RequestHandler = async (req, res, next) => {
    try {
        var user= req.user.data;
        const xit = new Xit({
            user : user,
            content: req.data.content,
            images: req.data.images
        });
    
        await xit.save();
        res.status(201).json({ success: true, xit });
    } catch (err) {
        next(err);
    }
}