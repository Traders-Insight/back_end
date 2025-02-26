"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware to parse JSON
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.get("/solana", (req, res) => {
    res.send("Hello, Solana!");
});
console.log("Hello, Solana!");
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map