import express, {Request, Response} from "express";
import {BaseItem, Item} from "./item.interface";

export const itemsRouter = express.Router();

// GET items
const dbCon = require("../config/db.config");

itemsRouter.get("/", async (req: Request, resp: Response) => {
    try {
        dbCon.query("SELECT * FROM `items`", await function (err, result) {
            if (err) throw err;
            console.log(result);
            const [items] = result;
            resp.status(200).send(result);
        });
    } catch (e) {
        resp.status(500).send(e.message);
    }
});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, resp: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        dbCon.query("SELECT * FROM `items` WHERE id=?", [id],
            function(err, result) {
                if (err) throw err;
                const [item] = result;

                if (item) {
                    console.log(item);
                    return resp.status(200).send(item);
                }

                resp.status(404).send("item not found");
            });
    } catch (e) {
        console.log(500)
        resp.status(500).send(e.message);
    }
});

// POST items

itemsRouter.post("/", async (req: Request, resp: Response) => {
    try {
        const item: BaseItem = req.body;
        dbCon.query("INSERT INTO `items` (name, price, description, image) VALUES (?, ?, ?, ?)",
            [item.name, item.price, item.description, item.image],
            function (err, result) {
                if (err) throw err;
                console.log(result);
                console.log('Data added successfully!');
                resp.status(201).json(result);

            }
        );
    } catch (e) {
        resp.status(500).send(e.message);
    }
});

// PUT items/:id
itemsRouter.put("/:id", async (req: Request, resp: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const itemUpdate: Item = req.body;
        dbCon.query("UPDATE `items` SET `name`=?, `price`=?, `description`=?, `image`=?  WHERE id=?",
                [itemUpdate.name, itemUpdate.price, itemUpdate.description, itemUpdate.image, id],
                function (err, result) {
                    if(err) throw err;
                    console.log(result);
                    console.log('Data updated successfully!');
                    return resp.status(200).json(result);
                });
    } catch (e) {
        console.log("update item route catch block")
        resp.status(500).send(e.message);
    }
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, resp: Response) => {

    try {
        const id: number = parseInt(req.params.id, 10);
        dbCon.query("DELETE FROM `items` WHERE id = ?", [id],
            function (err, result) {
                if (err) throw err;
                console.log(result);
                console.log('Data removed successfully!');
                resp.sendStatus(204);
            });
    } catch (e) {
        resp.status(500).send(e.message);
    }
});