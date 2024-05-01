import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'weather';

  location:any;
  showWeather: boolean = false
  showForeCast:boolean = false

  goToWeather(event : any){
    if(event){
      this.location = event
      this.showWeather = true
    }else{
      this.showWeather = false
    }

  }


}
