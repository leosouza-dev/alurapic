import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService, 
    // precisamos do activatedRoute para acessar o parametro da rota (flavio, almeida, etc)
    private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void{

    // buscando o valor do parametro da rota
    const userName = this.activatedRoute.snapshot.params.userName

    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }

}
