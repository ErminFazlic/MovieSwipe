
import * as Supertest from "supertest";

import { app } from "./start";



const request : Supertest.SuperTest<Supertest.Test> = Supertest.default(app);



test("End-to-end test", async () => {

 const res = await request.post('/users');

 expect(res.statusCode).toEqual(201);

 expect(res.body).toEqual([]);

});