"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
exports.app = app;
/* middleware  */
app.use((0, cors_1.default)());
app.use(express_1.default.json());
/* here will be all the imports routes */
const test_1 = __importDefault(require("./routes/v1/test"));
/* here will be the all the routes */
app.get("/", (req, res) => {
    const filePath = fs_1.default.readFileSync(path_1.default.join(__dirname, "../public/index.html"), "utf8");
    res.send(filePath);
});
/* Here is the User Routes */
app.use("/api/v1/test", test_1.default);
// 404 response
app.all("*", (req, res) => {
    res.status(404).send({
        message: "Not Found",
        status: 404,
    });
});
