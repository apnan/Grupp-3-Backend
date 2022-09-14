// const { expect } = require("chai");
// const chai = require("chai");
// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);


// const HOST = process.env.HOST || " http://localhost:3000";


// describe("Testing users with chai-http", () => {
//     describe("/GET /", () => {
      
//     it("it should GET all the users", (done) => {
//       chai
//         .request(HOST)
//         .get("/api/users")
//           .end((err, res) => {
//             console.log(res)
          
          
//           done();
//         });
//     });
//   });
// });

// const user = {
//   userName: {
//     type: String,
//   },
//   firstName: {
//     type: String,
//   },
//   lastName: {
//     type: String,
//   },
//   password: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
// };

// // describe("Testing user with supertest", () => {
// //   describe("given POST /v/user", () => {
// //     it("should add pet", () => {
// //       chai
// //         .request(HOST)
// //         .post("/v/user")
// //         .send(pet)
// //         .end((err, res) => {
// //           expect(res).to.have.status(200);
// //           expect(res).to.have.header("content-type", "application/json");
// //           expect(res).to.be.json;
// //           expect(res.body).to.have.property("id");
// //         });
// //     });
// //   });
// // });
