import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BooksService } from "src/app/service/books.service";
import { addbook, addbooksuccess, deletebooksuccess, deleteebook, getbook, getbooksuccess, loadbook, loadbookfail, loadbooksuccess, updatebook, updatebooksuccess } from "./Book.Action";
import { catchError, exhaustMap, of, map, switchMap } from "rxjs";
import { showalert } from "../Common/App.Action";

@Injectable()
export class BookEffects {
    constructor(private actin$: Actions, private service: BooksService) {

    }

    _loadbook = createEffect(() =>
        this.actin$.pipe(
            ofType(loadbook),
            exhaustMap((action) => {
                return this.service.GetAll().pipe(
                    map((data) => {
                        return loadbooksuccess({ list: data })
                    }),
                    catchError((_error) => of(loadbookfail({ errormessage: _error.message })))
                )
            })
        )
    )

    _getbook = createEffect(() =>
        this.actin$.pipe(
            ofType(getbook),
            exhaustMap((action) => {
                return this.service.Getbyid(action.id).pipe(
                    map((data) => {
                        return getbooksuccess({ obj: data })
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to fetch data :' + _error.message, resulttype: 'fail' })))
                )
            })
        )
    )

    _addbook = createEffect(() =>
        this.actin$.pipe(
            ofType(addbook),
            switchMap((action) => {
                return this.service.Create(action.inputdata).pipe(
                    switchMap((data) => {
                        return of(addbooksuccess({ inputdata: action.inputdata }),
                            showalert({ message: 'Created successfully.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to create book', resulttype: 'fail' })))
                )
            })
        )
    )
    _updatebook = createEffect(() =>
        this.actin$.pipe(
            ofType(updatebook),
            switchMap((action) => {
                return this.service.Update(action.inputdata).pipe(
                    switchMap((data) => {
                        return of(updatebooksuccess({ inputdata: action.inputdata }),
                            showalert({ message: 'Upadted successfully.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to update book', resulttype: 'fail' })))
                )
            })
        )
    )
    _deletebook = createEffect(() =>
    this.actin$.pipe(
        ofType(deleteebook),
        switchMap((action) => {
            return this.service.Delete(action.id).pipe(
                switchMap((data) => {
                    return of(deletebooksuccess({ id: action.id }),
                        showalert({ message: 'Deleted successfully.', resulttype: 'pass' }))
                }),
                catchError((_error) => of(showalert({ message: 'Failed to delete book', resulttype: 'fail' })))
            )
        })
    )
)



}