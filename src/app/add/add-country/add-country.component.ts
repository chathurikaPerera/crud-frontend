import { AppComponent } from './../../app.component';
import { HttpErrorResponse } from '@angular/common/http';
import { CountryService } from './../../country.service';
import { Country } from './../../country';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css'],
})
export class AddCountryComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    public z: AppComponent
  ) {}

  profileForm = this.formBuilder.group({
    country_name: [''],
  });

  ngOnInit(): void {}

  //add Country
  public addCountry() {
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      this.countryService.addCountry(this.profileForm.value).subscribe(
        (response: Country) => {
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          this.profileForm.reset();
        }
      );
    }
  }
}
