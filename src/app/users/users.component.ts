import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
import { User } from '../shared/model/user.model';
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public dragTableData: any[] = [];

  constructor(private _global: GlobalService) { }

  ngOnInit(): void {
    this.getUsersList();
    this.getDraggableTableData();
  }

  public getUsersList() {
    this._global.getUsers().subscribe(
      (res: any) => {
        this.users = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  public getDraggableTableData() {
    this._global.getJson().subscribe(
      (res: any) => {
        this.dragTableData = res.layout[0].sections;
        console.log(this.dragTableData);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  onDrop(event: CdkDragDrop<any>) {
    moveItemInArray(this.dragTableData, event.previousIndex, event.currentIndex);
    this.dragTableData.forEach((user, idx) => {
      user.p_order = idx + 1;
    });
  }

}
