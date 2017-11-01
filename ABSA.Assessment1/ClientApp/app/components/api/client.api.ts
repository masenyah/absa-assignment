import { Observable } from 'rxjs';
import { Person } from "../shared/Person"
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import "rxjs/Rx"

@Injectable()    
export class ClientDetailsApi{
    public baseUrl: string;
    constructor(private http: Http) {
        this.baseUrl = "http://localhost:29768/";
    }
    updateClientDetails(clientDetail: Person): Observable<Person> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl +'api/ClientDetail/UpdateClientDetails', clientDetail, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getClientDetails(): Observable<Person> {
        return this.http.get(this.baseUrl +'api/ClientDetail/GetClientDetails')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        let p = body as Person;
        return body || {};
    }
    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}