const Family = require('../controllers/family.controller');

module.exports = (app) => {
    app.post("/api/family/new/", Family.createNewFamilyMember);
    app.get("/api/family/", Family.findAllFamilyMembers);
    app.get("/api/family/:id", Family.findAllFamilyMembers);
    app.put("/api/family/:id", Family.updateFamilyMember);
    app.delete("/api/family/:id", Family.deleteFamily);
};