import { PostDialogComponent } from './../post-dialog/post-dialog.component';
import { MatDialog } from '@angular/material';
import { DataService } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  deletePost(id) {
    this.dataService.deletePost(id);
    this.dataSource = new PostDataSource(this.dataService);
  }

  openDialog() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Ádd Post'
    });
    dialogRef.componentInstance.event.subscribe((blogPost) => {
      this.dataService.addPost(blogPost.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
  }
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
