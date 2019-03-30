const db = require("../data/dbConfig.js");

module.exports = {
  getProjects,
  projectById,
  addProject,
  getActions,
  actionById,
  addAction
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
function getActions() {
  return db("actions");
}

function actionById(id) {
  return db("actions")
    .where({ id })
    .first();
}
function addAction(action) {
  return db("actions")
    .insert(action)
    .then(ids => {
      return projectById(ids[0]);
    });
}
