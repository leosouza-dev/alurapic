import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object[] = [];
  
  constructor(http: HttpClient){
    
    // observable do rxjs - observable - é lazy (precisa de um subscribe para ler)
    // const observable = http.get('http://localhost:3000/flavio/photos');
    // observable.subscribe();

    http.get<Object[]>('http://localhost:3000/flavio/photos')
        .subscribe(
          photos => this.photos = photos, 
          err => console.log(err) // segundo parametro é verif. de erro
        );
    
  }
}
