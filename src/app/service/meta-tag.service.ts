import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { MetaDocument } from '../model/meta-document';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

    constructor(private http: HttpClient) { }
    
    public fetchUrl(url: string): Observable<any> {
        const corsUrl = 'https://cors-anywhere.herokuapp.com/' + url;

        return this.http.get<any>(corsUrl, {responseType: 'text' as 'json'});
    }
        
}
