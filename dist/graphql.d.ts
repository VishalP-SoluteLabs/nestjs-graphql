export interface Book {
    id: number;
    title: string;
    price?: Nullable<number>;
}
export interface IQuery {
    books(): Book[] | Promise<Book[]>;
}
type Nullable<T> = T | null;
export {};
