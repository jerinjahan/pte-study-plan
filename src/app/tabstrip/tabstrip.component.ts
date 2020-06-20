import {Component, Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.css']
})
export class TabstripComponent {
  showModal: boolean;
  constructor() {}
  show(){
    this.showModal = true; 
  }
  hide(){
    this.showModal = false;
  }
}

