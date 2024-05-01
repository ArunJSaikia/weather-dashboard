import { Component, EventEmitter } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { Output } from '@angular/core';


@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent {

  @Output() goToWeather: EventEmitter<any> = new EventEmitter<any>()

  //set Guwahati as a default city
  locationSearch: any = 'Guwahati'
  constructor(private service: WeatherApiService){
  }

  ngOnInit(): void {
    this.search()
  }

  search(){
    this.service.searchLocation(this.locationSearch).subscribe((response:any)=>{
      if(response.length > 0){
        this.goToWeather.emit(response[0].name)
      }else{
        this.goToWeather.emit('')
      }
    })
  }
 

}
