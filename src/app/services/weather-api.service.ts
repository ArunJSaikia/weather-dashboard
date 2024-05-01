import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  //key parameter 
  apiKey: string = '3b143e12333343a2946175030243004';
  apiUrl: string = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) { }

  //q is lcoation or zip entered by user 
  searchLocation(data: string) {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', data);
    return this.http.get(`${this.apiUrl}/search.json`, { params });
  }

  //q is the location name returned by search.json
  getCurrentWeather(location: string) {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', location);
    return this.http.get(`${this.apiUrl}/current.json`, { params });
  }

//q is the location name returned by search.json
  getWeatherForecast(location: string) {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', location)
      .set('days', '4'); 
    return this.http.get(`${this.apiUrl}/forecast.json`, { params });
  }
}
