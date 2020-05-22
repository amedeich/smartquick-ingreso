import { Athlete } from './../../interfaces/athlete';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = true;
  athlete: Athlete[] = null;
  err = false;
  user: any;

  constructor(private _dataService: DataService) { 
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('____SQ'));
    this._dataService.get()
      .pipe(finalize(() => this.loading = false))
      .subscribe((data: Athlete[]) => this.athlete = data,
       (_) => this.err = true);
  }

}
