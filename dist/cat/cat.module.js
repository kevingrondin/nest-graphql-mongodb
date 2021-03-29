"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cat_service_1 = require("./cat.service");
const cat_resolver_1 = require("./cat.resolver");
const cat_schema_1 = require("./cat.schema");
let CatModule = class CatModule {
};
CatModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: cat_schema_1.Cat.name, schema: cat_schema_1.CatSchema }])],
        providers: [cat_service_1.CatService, cat_resolver_1.CatResolver],
    })
], CatModule);
exports.CatModule = CatModule;
//# sourceMappingURL=cat.module.js.map