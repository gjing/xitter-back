import express from 'express';
import { getXitController } from './get';

const xitsRouter = express.Router();

xitsRouter.get('/:id', getXitController)

export default xitsRouter;