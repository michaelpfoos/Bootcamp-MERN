const Authors = require('../controllers/authors.controller');

module.exports = (app) => {
    app.post("/api/authors/new/", Authors.createNewAuthor);
    app.get("/api/authors/", Authors.findAllAuthors);
    app.get("/api/authors/:id", Authors.findOneAuthor);
    app.put("/api/authors/:id", Authors.updateAuthor);
    app.delete("/api/authors/:id", Authors.deleteAuthor);
};