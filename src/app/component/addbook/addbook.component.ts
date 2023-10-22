import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { addbook, updatebook } from 'src/app/Store/Book/Book.Action';
import { getbook } from 'src/app/Store/Book/Book.Selectors';
import { Books } from 'src/app/Store/Model/Book.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddBookComponent implements OnInit {
  title = 'Add Book'
  isedit = false;
  dialogdata: any;

  constructor(private builder: FormBuilder, private ref: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private store: Store) {

  }
  ngOnInit(): void {
    this.dialogdata = this.data;
    this.title = this.dialogdata.title;
    this.store.select(getbook).subscribe(res => {
      this.bookform.setValue({
        id: res.id, title: res.title, country: res.country, language: res.language,
        pages: res.pages, author: res.author, year: res.year, status: res.status
      })
    })
  }

  ClosePopup() {
    this.ref.close();
  }



  bookform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required),
    language: this.builder.control('', Validators.required),
    pages: this.builder.control('', Validators.required),
    author: this.builder.control('', Validators.required),
    year: this.builder.control('', Validators.required),
    status: this.builder.control(true)
  })

  SaveBook() {
    if (this.bookform.valid) {
      const _obj: Books = {
        id: this.bookform.value.id as number,
        title: this.bookform.value.title as string,
        country: this.bookform.value.country as string,
        language: this.bookform.value.language as string,
        pages: this.bookform.value.pages as string,
        author: this.bookform.value.author as string,
        year: this.bookform.value.year as string,
        status: this.bookform.value.status as boolean
      }
      if (_obj.id === 0) {
        this.store.dispatch(addbook({ inputdata: _obj }))
      } else {
        this.store.dispatch(updatebook({ inputdata: _obj }))
      }
      this.ClosePopup();
    }
  }

}
