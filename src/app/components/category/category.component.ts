import { Component, OnInit, Input } from '@angular/core';
import { Athlete } from 'src/app/interfaces/athlete';
import {MatDialog} from '@angular/material/dialog';
import { MedalDialogComponent } from '../medal-dialog/medal-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() athletes: Athlete[] = [];
  bronzeAcum = 0;
  silverAcum = 0;
  goldAcum = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBronzeCounts();
    this.getSilverCounts();
    this.getGoldCounts();
  }

  openDialog = (type: string, label: string) => {
    const data = this.athletes.sort((a, b) => b[type] - a[type]).slice(0, 10);
    this.dialog.open(MedalDialogComponent, {
      data: {athletes: data, type, label },
      width: '500px'
    });
  }

  getBronzeCounts = () => {
    let acc = 0;
    this.athletes.map((item) => {
      acc = acc + item.bronze;
    });
    this.bronzeAcum = acc;
    const tops = this.athletes.sort((a,b) => b.bronze - a.bronze).slice(0, 10);
  }

  getSilverCounts = () => {
    let acc = 0;
    this.athletes.map((item) => {
      acc = acc + item.silver;
    });
    this.silverAcum = acc;
  }

  getGoldCounts = () => {
    let acc = 0;
    this.athletes.map((item) => {
      acc = acc + item.gold;
    });
    this.goldAcum = acc;
  }

}
