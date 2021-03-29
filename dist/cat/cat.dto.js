"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatType = void 0;
const graphql_1 = require("@nestjs/graphql");
let Characteristics = class Characteristics {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Characteristics.prototype, "lifespan", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Characteristics.prototype, "size", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Characteristics.prototype, "coat", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Characteristics.prototype, "color", void 0);
Characteristics = __decorate([
    graphql_1.ObjectType('Characteristics'),
    graphql_1.InputType('CharacteristicsInput')
], Characteristics);
let CatType = class CatType {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CatType.prototype, "breed", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Characteristics)
], CatType.prototype, "characteristics", void 0);
CatType = __decorate([
    graphql_1.ObjectType('CatType'),
    graphql_1.InputType('CatInputType')
], CatType);
exports.CatType = CatType;
//# sourceMappingURL=cat.dto.js.map