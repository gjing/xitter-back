import express from 'express';
import xitRouter from './xits';

const dummyRouter = express.Router();

dummyRouter.use("/", xitRouter)

export default dummyRouter;