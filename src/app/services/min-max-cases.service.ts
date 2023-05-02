import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { urls } from "src/config/config";
import { Country } from "../models/country";
import { MinMaxCaseData } from "../models/min-max-case-data";

@Injectable({
    providedIn: 'root'
})
export class MinMaxCasesService {
    constructor(private httpClient: HttpClient) {
    }

    getCountryList() {
        return this.httpClient.get<Country[]>(`${urls.GET_COUNTRIES_URL}`)
    }

    getMinMaxCases(country: string, from: string, to: string) {
        const url = `${urls.GET_MIN_MAX_CASES_URL}/${country}`;
        const params = new HttpParams()
            .set("from", from)
            .set("to", to);

        return this.httpClient.get<MinMaxCaseData>(url, {params})
    }

}