const express = require("express");
const helmet = require("helmet");

const db = require("./data/dbConfig.js");
const Projects = require("./projects/projects-model.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/projects", async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/api/projects/:id", async (req, res) => {
  try {
    const project = await Projects.projectById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/api/projects/:id/actions", async (req, res) => {
  try {
    const actions = await db("actions").where({ project_id: req.params.id });
    const project = await db("projects").where({ id: req.params.id });
    res.status(200).json({ project, actions });
  } catch (error) {
    res.status(500).json(error);
  }
});
server.get("/api/actions", async (req, res) => {
  try {
    const actions = await Projects.getActions();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});
server.get("/api/actions/:id", async (req, res) => {
  try {
    const action = await Projects.actionById(req.params.id);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json(error);
  }
});
server.post("/api/projects", async (req, res) => {
  try {
    const project = await Projects.addProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Error adding project"
    });
  }
});
server.post("/api/actions", async (req, res) => {
  try {
    const action = await Projects.addAction(req.body);
    res.status(201).json(action);
  } catch (error) {
    res.status(500).json({
      message: "Error adding action"
    });
  }
});

const port = process.env.PORT || 6000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
