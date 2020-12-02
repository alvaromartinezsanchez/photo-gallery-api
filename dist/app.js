"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
//Setting
app.set('port', process.env.PORT || 4000);
//middleware
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//Routes
app.use('/api', index_1.default);
//carpeta uploads  "Contiene las imagenes subidas"
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
