import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private controllerService: PostsService) { }

  ngOnInit() {
  }
  getbalance() {
    this.controllerService.getAllPosts().subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
