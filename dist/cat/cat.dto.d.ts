declare class Characteristics {
    lifespan: string;
    size: 'small' | 'medium' | 'large';
    coat: 'short' | 'medium' | 'long';
    color: string;
}
export declare class CatType {
    breed: string;
    characteristics: Characteristics;
}
export {};
