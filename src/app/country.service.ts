import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private serverUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  //get the all countries
  public getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.serverUrl}/rest/v2/all`);
  }

  //save the country
  public addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(`${this.serverUrl}/rest/v2/add`, country);
  }

  //update the country
  public updateCountry(country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.serverUrl}/rest/v2/update`, country);
  }

  //delete country
  public deleteCountry(countryId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.serverUrl}/rest/v2/delete/${countryId}`
    );
  }
}
