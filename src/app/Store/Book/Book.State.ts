import { BookModel } from "../Model/Book.model";

export const BookState:BookModel={
    list:[],
    errormessage:'',
    bookobj:{
        id: 0,
        title: "",
        author: "",
        country: "",
        language: "CUSTOMER",
        pages: "",
        year: "level1",
        status: true
    }
}