import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My app 2';
  imgPath = "https://biografieonline.it/img/bio/gallery/p/Paolo_Brosio_1.jpg";
  isLiked = true;


  piaciuto = true;

  piuClassi={
  rosso: true,
  under: true

  }

  public onClick(){
    console.log("ciao");
   
  }
  nomeDelComponent = "Paolo Brosio";
  
  public onLike(){
    console.log("Ti piace " + this.nomeDelComponent);
    
  }


}
