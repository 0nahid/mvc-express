"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const router = (0, express_1.Router)();
router.get("/", controller_1.getAllUsers);
router.post("/", controller_1.createUser);
exports.default = router;
