import { createReducer, on } from "@ngrx/store";
import { BookState } from "./Book.State";
import { addbooksuccess, deletebooksuccess, getbooksuccess, loadbookfail, loadbooksuccess, openpopup, updatebooksuccess } from "./Book.Action";

const _BookReducer = createReducer(BookState,
    on(loadbooksuccess, (state, action) => {
        return {
            ...state,
            list: [...action.list],
            errormessage: ''
        }
    }),
    on(getbooksuccess, (state, action) => {
        return {
            ...state,
            bookobj: action.obj,
            errormessage: ''
        }
    }),
    on(loadbookfail, (state, action) => {
        return {
            ...state,
            list: [],
            errormessage: action.errormessage
        }
    }),
    on(addbooksuccess, (state, action) => {
        const _maxid = Math.max(...state.list.map((o) => o.id));
        const _newdata = { ...action.inputdata };
        _newdata.id = _maxid + 1;
        return {
            ...state,
            list: [...state.list, _newdata],
            errormessage: ''
        }
    }),
    on(updatebooksuccess, (state, action) => {
        const _newdata = state.list.map((o) => {
            return o.id === action.inputdata.id ? action.inputdata : o
        })
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),
    on(deletebooksuccess, (state, action) => {
        const _newdata = state.list.filter((o)=>o.id!==action.id);
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),
    on(openpopup, (state, action) => {
        return {
            ...state,
            bookobj: {
                id: 0,
                author: "",
                title: "",
                language: "",
                country: "",
                pages: "",
                year: "",
                status: true
            }
        }
    })
)

export function BookReducer(state: any, action: any) {
    return _BookReducer(state, action);
}