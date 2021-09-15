const controller = require('../controllers/student.controller');

module.exports = (app) => { 
    app.post("/api/student/createStudent",controller.createStudent);
    app.get("/api/student/getStudent",controller.getStudent);
    app.get("/api/student/getById",controller.getById);
    app.put("/api/student/update",controller.update);
}