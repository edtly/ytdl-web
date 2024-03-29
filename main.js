"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var default_1 = __importDefault(require("./dist/routes/default"));
var app = express_1.default();
var port = parseInt(process.env.PORT) || 4131;
app.set("views", "views");
app.set("view engine", "pug");
app.use(express_1.default.static("public"));
app.use(default_1.default);
app.listen(port, function () {
  console.log("hello gilga, app work on port: " + port);
});
