import request from "supertest";
import { app } from "../app";

test("GET /coffee should return correct object with default param", async () => {
    const res = await request(app)
        .get("/coffee")
        .query({ coffeeName: "Latte" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: "Coffee",
        name: "Latte",
    });
});

test("GET /coffee should return correct object with custom param", async () => {
    const res = await request(app)
        .get("/coffee")
        .query({ coffeeName: "mocha" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: "Coffee",
        name: "mocha",
    });
});

test("GET /coffee should return correct object with no param", async () => {
    const res = await request(app)
        .get("/coffee");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: "Coffee",
        name: "Latte",
    });
});
