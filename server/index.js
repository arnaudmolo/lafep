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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ffmpeg_concat_1 = __importDefault(require("ffmpeg-concat"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(express_1.default.urlencoded({
    extended: true
}));
console.log([
    path_1.default.resolve(__dirname, '../videos/blue.mp4'),
    path_1.default.resolve(__dirname, '../videos/BOOBA Feat. ZED - Jauné.mp4'),
    path_1.default.resolve(__dirname, '../videos/KIKESA - ROUGE (SOLO3).mp4')
]);
app.post('/viedo-generator', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var res_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('req.body', req.body);
                console.log('-'.repeat(10));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ffmpeg_concat_1.default({
                        output: 'test.mp4',
                        videos: [
                            path_1.default.resolve(__dirname, '../videos/blue.mp4'),
                            path_1.default.resolve(__dirname, '../videos/BOOBA Feat. ZED - Jauné.mp4'),
                            path_1.default.resolve(__dirname, '../videos/KIKESA - ROUGE (SOLO3).mp4')
                        ],
                        log: console.log,
                    })];
            case 2:
                res_1 = _a.sent();
                console.log({ res: res_1 });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log('eroooooor');
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4:
                res.sendFile;
                res.send('ok');
                return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () {
    console.log('App listening');
});
