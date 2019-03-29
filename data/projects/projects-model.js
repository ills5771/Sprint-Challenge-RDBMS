const db = require("../data/dbConfig.js");

module.exports = {
  getProjects,
  projectById
};

function getProjects() {
  return db("projects");
}

function projectById(id) {
  return db("projects")
    .where({ id })
    .first();
}
