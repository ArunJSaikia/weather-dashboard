import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {

  @Input() location : any

  foreCastDetails : any
  constructor(private service: WeatherApiService){ }
  
  ngOnChanges(){
    this.weatherForcast()
  }

  weatherForcast(){
    this.service.getWeatherForecast(this.location).subscribe((response:any)=>{
      if(response){
       
        this.foreCastDetails = response.forecast.forecastday.splice(1,3)
      }
    })
  }

}
