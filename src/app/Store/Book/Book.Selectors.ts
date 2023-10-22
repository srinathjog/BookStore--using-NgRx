import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookModel } from "../Model/Book.model";

const getbookstate = createFeatureSelector<BookModel>('book');

export const getabooklist = createSelector(getbookstate, (state) => {
    return state.list;
})

export const getbook = createSelector(getbookstate, (state) => {
    return state.bookobj;
})