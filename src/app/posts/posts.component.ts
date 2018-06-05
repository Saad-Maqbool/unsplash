import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  photoname = '';
    imagePath;

  constructor(private controllerService: PostsService) { }

  ngOnInit() {
  }
  getAllPictures() {
    this.controllerService.getAllPictures(this.photoname).subscribe(
      res => {
        console.log(res);
        this.imagePath = res;
      }
    );
  }
}
