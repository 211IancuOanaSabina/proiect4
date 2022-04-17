import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserApiService {

    constructor(protected http: HttpClientService) { }

    changeUsername(username: string): Observable<any> {
        return this.http.get(`/api/users/change/${username}`)
            .pipe(map((res: any) => res.data));
    }
    getMessages(email: string): Observable<any> {
        return this.http.get(`/api/users/messages/${email}`)
            .pipe(map((res: any) => res.data));
    }

}
