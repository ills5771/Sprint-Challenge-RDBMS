const db = require("../data/dbConfig.js");

module.exports = {
  getProjects,
  projectById,
  addProject
};

function getProjects() {
  return db("projects");
}

function projectById(id) {
  return db("projects")
    .where({ id })
    .first();
}
function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return projectById(ids[0]);
    });
}
