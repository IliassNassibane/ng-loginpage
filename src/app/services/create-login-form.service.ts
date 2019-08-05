import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class CreateLoginFormService {

  constructor(private http: HttpClient) { }

  send(data: Object): Observable<any> {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
    };

    return this.http.post(
      'https://your-app-backend-hostname.your-domain.com/simple-captcha-endpoint-path', data, options
    );
  }
}
