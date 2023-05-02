import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { MinMaxCaseData } from 'src/app/models/min-max-case-data';
import { MinMaxCasesService } from 'src/app/services/min-max-cases.service';

@Component({
  selector: 'app-min-max-cases',
  templateUrl: './min-max-cases.component.html'
})
export class MinMaxCasesComponent implements OnInit {
    minMaxCasesForm: FormGroup;
    
    minMaxCases: MinMaxCaseData;
    countryList: Country[];
    

    constructor(
      private formBuilder: FormBuilder,
      private minMaxCasesService: MinMaxCasesService) {
    }

    get selectedCountry() {
      return this.minMaxCasesForm.controls['country'];
    }

    get from() {
      return this.minMaxCasesForm.controls['from'];
    }

    get to() {
      return this.minMaxCasesForm.controls['to'];
    }

    ngOnInit(): void {
      this.minMaxCasesService.getCountryList().subscribe({
          next: countries => this.countryList = countries
      });

      this.minMaxCasesForm = this.formBuilder.group({
          country: [null, Validators.required],
          from: [null, Validators.required],
          to: [null, Validators.required]
      });
    }

    submit() {
      const country = this.selectedCountry.value;
      const from = this.from.value;
      const to = this.to.value;

      this.minMaxCasesService
        .getMinMaxCases(country, from, to)
        .subscribe({
          next: minMaxCases => {
              this.minMaxCases = minMaxCases;
          },
          error: error => alert("Incorrect input data! Please, check and try again.")
      });
    }

}
