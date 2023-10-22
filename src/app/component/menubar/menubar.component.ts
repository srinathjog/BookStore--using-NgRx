import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Roleaccess, Userinfo } from 'src/app/Store/Model/User.model';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  ismenuvisible = false;
  menulist !: Roleaccess[]
  constructor() {

  }
  ngOnInit(): void {
  }
  

}
