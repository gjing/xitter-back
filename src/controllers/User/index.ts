import express from 'express';
import { getUserController } from './get';

const usersRouter = express.Router();

usersRouter.get('/:id', getUserController)

export default usersRouter;