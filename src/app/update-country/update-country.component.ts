import { AppComponent } from './../app.component';
import { CountryService } from './../country.service';
import { Country } from './../country';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css'],
})
export class UpdateCountryComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    public v: AppComponent
  ) {}

  profileForm = this.formBuilder.group({
    id: [this.data.y.id],
    country_name: [this.data.y.country_name],
  });

  ngOnInit(): void {}

  // public editCountry() {
  //   console.log(this.profileForm.value);
  //   if (this.profileForm.valid) {
  //     this.countryService.updateCountry(this.profileForm.value).subscribe(
  //       (response: Country) => {
  //         console.log(response);
  //       },
  //       (error: HttpErrorResponse) => {
  //         alert(error.message);
  //         this.profileForm.reset();
  //       }
  //     );
  //   }
  // }

  // public editCountry() {
  //   this.v.editCountry(this.profileForm.value);
  //   this.v.getCountries();
  // }
}
