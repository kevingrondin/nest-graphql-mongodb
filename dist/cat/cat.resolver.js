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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cat_service_1 = require("./cat.service");
const cat_dto_1 = require("./cat.dto");
let CatResolver = class CatResolver {
    constructor(catService) {
        this.catService = catService;
    }
    async cats() {
        return this.catService.findAll();
    }
    async createCat(input) {
        return this.catService.create(input);
    }
    async updateCat(id, input) {
        return this.catService.update(id, input);
    }
    async deleteCat(id) {
        return this.catService.delete(id);
    }
};
__decorate([
    graphql_1.Query((returns) => [cat_dto_1.CatType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "cats", null);
__decorate([
    graphql_1.Mutation((returns) => cat_dto_1.CatType),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cat_dto_1.CatType]),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "createCat", null);
__decorate([
    graphql_1.Mutation((returns) => cat_dto_1.CatType),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cat_dto_1.CatType]),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "updateCat", null);
__decorate([
    graphql_1.Mutation((returns) => cat_dto_1.CatType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatResolver.prototype, "deleteCat", null);
CatResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [cat_service_1.CatService])
], CatResolver);
exports.CatResolver = CatResolver;
//# sourceMappingURL=cat.resolver.js.map