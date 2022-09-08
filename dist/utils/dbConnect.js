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
exports.getDbConnection = exports.dbConnect = void 0;
const mongodb_1 = require("mongodb");
const connectionString = process.env.ATLAS_URI || "";
const client = new mongodb_1.MongoClient(connectionString);
let dbConnection = null;
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (dbConnection)
        return;
    try {
        yield client.connect();
        dbConnection = client.db("test");
        console.log("🚀 Database connected");
    }
    catch (error) {
        console.log(`Database connection error: ${error}`);
    }
});
exports.dbConnect = dbConnect;
const getDbConnection = () => {
    return dbConnection;
};
exports.getDbConnection = getDbConnection;
