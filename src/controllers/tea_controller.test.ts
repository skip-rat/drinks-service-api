import request from "supertest";
import { app } from "../app";

test("GET /tes should return correct object with default param", async () => {
    const res = await request(app)
        .get("/tea")
        .query({ teaName: "English Breakfast" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: "Tea",
        name: "English Breakfast",
    });
});

test("GET /tea should return correct object with custom param", async () => {
    const res = await request(app)
        .get("/tea")
        .query({ teaName: "Earl Grey" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: "Tea",
        name: "Earl Grey",
    });
});

test("GET /tea should return correct object with no param", async () => {
    const res = await request(app)
        .get("/tea");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: "Tea",
        name: "English Breakfast",
    });
});