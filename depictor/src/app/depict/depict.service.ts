import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DepictionConfig } from './depiction-config';

@Injectable({
  providedIn: 'root'
})
export class DepictService {

  constructor(private httpClient: HttpClient) { }

  public depict(depictionConfig: DepictionConfig) {
    return this.httpClient.post<any>(environment.depictionUrl, depictionConfig);
  }
}
