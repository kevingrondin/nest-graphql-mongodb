import { CatService } from './cat.service';
import { CatType } from './cat.dto';
export declare class CatResolver {
    private readonly catService;
    constructor(catService: CatService);
    cats(): Promise<import("./cat.schema").Cat[]>;
    createCat(input: CatType): Promise<import("./cat.schema").Cat>;
    updateCat(id: string, input: CatType): Promise<import("./cat.schema").Cat>;
    deleteCat(id: string): Promise<import("./cat.schema").Cat>;
}
