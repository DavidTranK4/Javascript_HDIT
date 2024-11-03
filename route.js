const experss = require ("express")
const Router = experss.Router();
const siteController = require("/request")

Router.get("/index",siteController.index)