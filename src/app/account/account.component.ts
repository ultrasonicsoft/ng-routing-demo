import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  
  private _pendingChanges : boolean;
  public get pendingChanges() : boolean {
    return this._pendingChanges;
  }
  public set pendingChanges(v : boolean) {
    this._pendingChanges = v;
  }
  

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pendingChanges = false;

    this.activatedRoute.data.subscribe(data => {
      console.log(data.pageTitle);
    })
  }

}
