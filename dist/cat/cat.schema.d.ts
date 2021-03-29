import { Document } from 'mongoose';
declare class Characteristics {
    lifespan: string;
    size: 'small' | 'medium' | 'large';
    coat: 'short' | 'medium' | 'long';
    color: string;
}
export declare class Cat {
    breed: string;
    characteristics: Characteristics;
}
export declare type CatDocument = Cat & Document;
export declare const CatSchema: import("mongoose").Schema<Document<Cat, {}>, import("mongoose").Model<any, any>, undefined>;
export {};
