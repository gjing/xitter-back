import { expect, test } from "bun:test";
import { connectDb, disconnectDb } from "../../src/db/conn";

test("Test DB Connection", async () => {
    let result = await Promise.resolve(connectDb());
    result = await Promise.resolve(disconnectDb());
});