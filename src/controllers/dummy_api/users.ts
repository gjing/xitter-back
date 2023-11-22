import express from 'express';
import { RequestHandler } from 'express';

const userRouter = express()

const getUserController: RequestHandler = async (req, res, next) => {
    const id = req.params.id;
    for (let user of users) {
        if (user["_id"] == id) {
            res.send(JSON.stringify(user))
            break;
        }
    }
}

const getUsersController: RequestHandler = async (req, res, next) => {
    res.send(JSON.stringify(users))
}

const postUserController: RequestHandler = async (req, res, next) => {
    
}

const deleteUserController: RequestHandler = async (req, res, next) => {
    
}

userRouter.get("/users", getUsersController);
userRouter.get("/users/:id", getUserController);
userRouter.post("/users", getUserController);
userRouter.delete("/users/:id", getUserController);

const users = [
    {
        _id: 1,
        username: "Dummy 1",
        createdAt: Date.now() + 1,
        updatedAt: Date.now() + 1
    },
    {
        _id: 2,
        username: "Dummy 2",
        createdAt: Date.now() + 2,
        updatedAt: Date.now() + 2
    },
    {
        _id: 3,
        username: "Dummy 3",
        createdAt: Date.now() + 3,
        updatedAt: Date.now() + 3
    },
    {
        _id: 4,
        username: "Dummy 4",
        createdAt: Date.now() + 4,
        updatedAt: Date.now() + 4
    },
    {
        _id: 5,
        username: "Dummy 5",
        createdAt: Date.now() + 5,
        updatedAt: Date.now() + 5
    },
]

export default userRouter;