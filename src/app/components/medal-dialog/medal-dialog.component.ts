import { Athlete } from './../../interfaces/athlete';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-medal-dialog',
  templateUrl: './medal-dialog.component.html',
  styleUrls: ['./medal-dialog.component.scss']
})
export class MedalDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {athletes: Athlete[], type: string, label: string}) {}

  ngOnInit(): void {
  }

}
