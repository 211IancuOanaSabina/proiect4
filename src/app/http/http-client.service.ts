import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiError } from '../models/http/api-error';
import { Dictionary } from '../models/http/dictionary';
import { HttpOptionsType } from '../models/http/http-options-type';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private host: string = 'http://localhost:8000';
  constructor(protected http: HttpClient,) { }

  get<R>(path: string, params?: Dictionary<string> | Dictionary<string[]>): Observable<R> {
    return this.request<R>('GET', path, { params });
  }

  post<R>(path: string, body?: any | null, params?: Dictionary<string> | Dictionary<string[]>): Observable<R> {
    return this.request<R>('POST', path, { body, params });
  }

  put<R>(path: string, body?: any | null, params?: Dictionary<string> | Dictionary<string[]>): Observable<R> {
    return this.request<R>('PUT', path, { body, params });
  }

  patch<R>(path: string, body?: any | null, params?: Dictionary<string> | Dictionary<string[]>): Observable<R> {
    return this.request<R>('PATCH', path, { body, params });
  }

  delete<R>(path: string, params?: Dictionary<string> | Dictionary<string[]>): Observable<R> {
    return this.request<R>('DELETE', path, { params });
  }
  request<R>(method: string, path: string, options?: HttpOptionsType) {
    const url = this.buildUrl(path);

    return this.http.request<R>(method, url, options)
      .pipe(catchError(err => this.handleError(err)));
  }


  protected handleError(res: any): Observable<never> {

    const error = new ApiError('Ne pare rău, a apărut o eroare neașteptată. Vă rugăm să reincercati.');


    if (typeof res === 'string') {
      error.message = res;
    } else if (typeof res.error === 'string') {
      error.message = res.error;
    } else if (typeof res.error === 'object') {
      if (typeof res.error.message === 'string') {
        error.message = res.error.message;
      }
      if (typeof res.error.type === 'string') {
        error.type = res.error.type;
      }
      if (typeof res.error.data === 'object') {
        error.message = res.error.data.errorMessage;
      }
    } else if (res.data)
      // display error for every other http exception
      if (res.status !== 404 || res.status !== 401) {
        // todo: display a snackbar with error
      }

    return throwError(error);
  }
  protected buildUrl(path: string) {
    return this.host + path;
  }
}
