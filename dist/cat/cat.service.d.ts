import { Model } from 'mongoose';
import { Cat, CatDocument } from './cat.schema';
import { CatType } from './cat.dto';
export declare class CatService {
    private catModel;
    constructor(catModel: Model<CatDocument>);
    findAll(): Promise<Cat[]>;
    create(createCatDto: CatType): Promise<Cat>;
    update(id: string, updateCatDto: CatType): Promise<Cat>;
    delete(id: string): Promise<Cat>;
}
