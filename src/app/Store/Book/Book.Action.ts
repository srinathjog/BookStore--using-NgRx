import { createAction, props } from "@ngrx/store";
import { Books } from "../Model/Book.model";

export const LOAD_BOOK='[book page]load book'
export const LOAD_BOOK_SUCCESS='[book page]load book success'
export const LOAD_BOOK_FAIL='[book page]load book fail'
export const ADD_BOOK='[book page]add book'
export const ADD_BOOK_SUCCESS='[book page]add book success'
export const UPDATE_BOOK='[book page]update book'
export const UPDATE_BOOK_SUCCESS='[book page]update book success'

export const DELETE_BOOK='[book page]delete book'
export const DELETE_BOOK_SUCCESS='[book page]delete book success'

export const GET_BOOK='[book page]get book'
export const GET_BOOK_SUCCESS='[book page]get book success'
export const OPEN_POPUP='[book page]open popup'

export const loadbook=createAction(LOAD_BOOK)
export const loadbooksuccess=createAction(LOAD_BOOK_SUCCESS,props<{list:Books[]}>())
export const loadbookfail=createAction(LOAD_BOOK_FAIL,props<{errormessage:string}>())

export const addbook=createAction(ADD_BOOK,props<{inputdata:Books}>())
export const addbooksuccess=createAction(ADD_BOOK_SUCCESS,props<{inputdata:Books}>())

export const updatebook=createAction(UPDATE_BOOK,props<{inputdata:Books}>())
export const updatebooksuccess=createAction(UPDATE_BOOK_SUCCESS,props<{inputdata:Books}>())

export const deleteebook=createAction(DELETE_BOOK,props<{id:number}>())
export const deletebooksuccess=createAction(DELETE_BOOK_SUCCESS,props<{id:number}>())

export const getbook=createAction(GET_BOOK,props<{id:number}>())
export const getbooksuccess=createAction(GET_BOOK_SUCCESS,props<{obj:Books}>())

export const openpopup=createAction(OPEN_POPUP);