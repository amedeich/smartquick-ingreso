import { Athlete } from './../../interfaces/athlete';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-atlh-view',
  templateUrl: './atlh-view.component.html',
  styleUrls: ['./atlh-view.component.scss']
})

export class AtlhViewComponent implements OnInit {

  displayedColumns: string[] = ['athlete', 'age', 'country', 'date', 'sport', 'year', 'bronze', 'silver', 'gold', 'total'];
  dataSource: MatTableDataSource<Athlete>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() athletes: Athlete[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.athletes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
