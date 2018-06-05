import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getAllPictures(photoname) {
    return this.http.get(`https://api.unsplash.com/search/photos?query=${photoname}&client_id=${environment.clientId}`);
  }
}
