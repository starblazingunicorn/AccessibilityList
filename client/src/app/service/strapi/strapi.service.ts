import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  Strapi  from 'strapi-sdk-js';
 

@Injectable({
  providedIn: 'root'
})

export class StrapiService {
  private apiUrl: string;
  private strapi: Strapi;

  constructor(private http: HttpClient) {
    this.apiUrl =  'http://localhost:1337';
    this.strapi = new Strapi();
   }
}
