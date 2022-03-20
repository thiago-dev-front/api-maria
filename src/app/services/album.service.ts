import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../models/album-models';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
  constructor(private httpClient: HttpClient) {}

  public getAlbum() {
    return this.httpClient.get<Album[]>(this.url);
  }
}
