import { UpdateCountryComponent } from './update-country/update-country.component';
import { AddCountryComponent } from './add/add-country/add-country.component';
import { CountryService } from './country.service';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Country } from './country';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'button'];
  public country: Country[];
  //public editCountry: Country;
  //public deleteCountry: Country;

  constructor(
    private countryService: CountryService,
    public dialog: MatDialog
  ) {
    this.country = [];
  }

  ngOnInit() {
    this.getCountries();
  }

  public getCountries(): void {
    this.countryService.getCountry().subscribe(
      (response: Country[]) => {
        this.country = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteSingleCountry(id: number): void {
    this.countryService.deleteCountry(id).subscribe(
      (response: void) => {
        this.getCountries();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openDialog() {
    // public dialog: MatDialog
    let dialogref = this.dialog.open(AddCountryComponent, {
      width: '250px',
      height: '250px',
    });
    dialogref.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  openEditDialog(value: Country) {
    console.log(value.id);
    let x = 'huhu';

    let dialogref = this.dialog.open(UpdateCountryComponent, {
      width: '250px',
      height: '250px',
      data: { y: value },
    });
    dialogref.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  public editCountry(x: any) {
    this.countryService.updateCountry(x).subscribe(
      (response: Country) => {
        // console.log(response);
        this.getCountries();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
