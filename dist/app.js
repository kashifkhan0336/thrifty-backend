"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 5000;
app.get("/", function (request, response) {
  response.json({ status: "200 Ok" });
});
app.listen(port, function () {
  console.log(
    "\u26A1\uFE0F[server]: Server is running at https://localhost:".concat(port)
  );
});
//# sourceMappingURL=app.js.map
