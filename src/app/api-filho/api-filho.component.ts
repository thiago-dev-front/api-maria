import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album-models';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-api-filho',
  templateUrl: './api-filho.component.html',
  styleUrls: ['./api-filho.component.css'],
})
export class ApiFilhoComponent implements OnInit {
  getList: Array<Album> = []
  constructor(private album: AlbumService) {}

  ngOnInit() {
    this.getAlbum()
  }

  getAlbum() {
    this.album.getAlbum().subscribe((response : Array<Album>) => {
       this.getList = response;
    } )


  }
}
