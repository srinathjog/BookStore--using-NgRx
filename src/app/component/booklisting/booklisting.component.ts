import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { AddBookComponent } from '../addbook/addbook.component';
import { Store } from '@ngrx/store';
import { Books } from 'src/app/Store/Model/Book.model';
import { getabooklist } from 'src/app/Store/Book/Book.Selectors';
import { deleteebook, getbook, loadbook, openpopup } from 'src/app/Store/Book/Book.Action'
import { MatTableDataSource } from "@angular/material/table"
import { MatPaginator } from "@angular/material/paginator"
import { MatSort } from "@angular/material/sort"

@Component({
  selector: 'app-booklisting',
  templateUrl: './booklisting.component.html',
  styleUrls: ['./booklisting.component.css']
})
export class BooklistingComponent implements OnInit {

  Booklist!: Books[];
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColums: string[] = ["id", "title","country","language","pages","author","year","status", "action"]
  constructor(private dialog: MatDialog, private store: Store) {

  }
  ngOnInit(): void {
    this.store.dispatch(loadbook());
    this.store.select(getabooklist).subscribe(item => {
      this.Booklist = item;
      this.datasource = new MatTableDataSource<Books>(this.Booklist);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  FunctionAdd() {
    this.OpenPopup(0, 'Create book');
  }
  FunctionEdit(id:number){
    this.OpenPopup(id, 'Update book');
    this.store.dispatch(getbook({id:id}))
  }

  FunctionDelete(id:number){
    if(confirm('do you want to remove?')){
      this.store.dispatch(deleteebook({id:id}));
    }
  }

  OpenPopup(id: number, title: string) {
    this.store.dispatch(openpopup());
    this.dialog.open(AddBookComponent, {
      width: '50%',
      data: {
        id: id,
        title: title
      }
    })

  }

}
