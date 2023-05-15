import { Resolver, Query } from "@nestjs/graphql";
import { Book } from "./book.schema";
import {Book as BookModel} from '../graphql'

@Resolver((of) => Book)  //because in schema the name is Book --->> type Book{......}
export class BookResolver{

    @Query(returns => [Book], { name: 'books'})   //name of the query(see schema.graphql)
    getAllBooks(){
        let arr : BookModel[]    = [ //refering to book interface,(using interface so we don't miss or add any values other than id,title and price)(simply it refers to that graphql schema only)
            { id: 1, title: 'Harry Potter', price: 500},
            { id: 2, title: 'Hunger Games', price: 600},
            { id: 3, title: 'Robin Hood', price: 900},
        ]
        //return books
        return arr;
    }
}