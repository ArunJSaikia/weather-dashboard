import { Component } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { Input} from '@angular/core';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  @Input() location: any;

  weatherDetails: any;

  constructor(private service: WeatherApiService){}

  ngOnChanges(){
    this.CurrentWeather()
  }

  CurrentWeather(){
    this.service.getCurrentWeather(this.location).subscribe((response)=>{
      if(response){
        this.weatherDetails = response;
      }
    })
  }



}
