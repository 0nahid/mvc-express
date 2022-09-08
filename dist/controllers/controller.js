"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const dbConnect_1 = require("./../utils/dbConnect");
/* for get all the users */
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getDb = yield (0, dbConnect_1.getDbConnection)();
    const users = yield getDb.collection("users").find().toArray();
    res.status(200).json(users);
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getDb = yield (0, dbConnect_1.getDbConnection)();
    const user = yield getDb.collection("users").insertOne(req.body);
    res.status(201).json({
        status: true,
        message: "User Created Successfully",
        data: user,
    });
});
exports.createUser = createUser;
