import express from 'express';
import { RequestHandler } from 'express';

const xitRouter = express()


const getXitController: RequestHandler = async (req, res, next) => {
    const id = req.params.id;
    for (let xit of xits) {
        if (xit["_id"] == id) {
            res.send(JSON.stringify(xit))
            break;
        }
    }
}

const getXitsController: RequestHandler = async (req, res, next) => {
    res.send(JSON.stringify(xits))
}

const postXitController: RequestHandler = async (req, res, next) => {
    
}

const deleteXitController: RequestHandler = async (req, res, next) => {
    
}

xitRouter.get("/xits", getXitsController);
xitRouter.get("/xits/:id", getXitController);
xitRouter.post("/xits", getXitController);
xitRouter.delete("/xits/:id", getXitController);

const xits = [
    {
        _id: 1,
        user: 1,
        content: "uhaweofuhawoeuhfawe awuehfawefh uoaiwhefo efoaihw oiwaehfoiawefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: null,
        images: null,
        createdAt: Date.now() + 1,
        updatedAt: Date.now() + 1
    },
    {
        _id: 2,
        user: 1,
        content: "uhaweofuhawo AW AWEF WAEFfo efoaihw awe aehfoiawefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: null,
        images: null,
        createdAt: Date.now() + 2,
        updatedAt: Date.now() + 2
    },
    {
        _id: 3,
        user: 1,
        content: "uhaweofuhawoeuhfewf awefa waef wae fefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: null,
        images: null,
        createdAt: Date.now() + 3,
        updatedAt: Date.now() + 3
    },
    {
        _id: 4,
        user: 2,
        content: "awe awefawfe sdfa wffo efoaihw oiwaehfoiawefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: 3,
        images: null,
        createdAt: Date.now() + 4,
        updatedAt: Date.now() + 4
    },
    {
        _id: 5,
        user: 3,
        content: "a wefadf ga4rgrsdf fh uoaiwhefo efoaihw oiwaehfoiawefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: null,
        images: null,
        createdAt: Date.now() + 5,
        updatedAt: Date.now() + 5
    },
    {
        _id: 6,
        user: 4,
        content: " awef zgaef wefa hw oiwaehfoiawefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: null,
        images: null,
        createdAt: Date.now() + 6,
        updatedAt: Date.now() + 6
    },
    {
        _id: 7,
        user: 1,
        content: "awe dafa wef a fh uoaiwhefo efoaihw oiwaehfoiawefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: 2,
        images: null,
        createdAt: Date.now() + 7,
        updatedAt: Date.now() + 7
    },
    {
        _id: 8,
        user: 2,
        content: " fawef sdz fawef whefo efoaihw oiwaehfoiawefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: null,
        images: null,
        createdAt: Date.now() + 8,
        updatedAt: Date.now() + 8
    },
    {
        _id: 9,
        user: 3,
        content: "a fawefa wef fawe fwfewa efoaihw oiwaehfoiawefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: null,
        images: null,
        createdAt: Date.now() + 9,
        updatedAt: Date.now() + 9
    },
    {
        _id: 10,
        user: 4,
        content: "afwwaef adfasefa wef w oiwaehfoiawefh aweof  ",
        likes: [ 1, 2, 3 ],
        parent: null,
        images: null,
        createdAt: Date.now() + 10,
        updatedAt: Date.now() + 10
    },
]

export default xitRouter;