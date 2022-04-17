import { HttpHeaders, HttpParams } from '@angular/common/http';

export type HttpOptionsType = {
  body?: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  responseType?: 'json';
  reportProgress?: boolean;
  withCredentials?: boolean;
};
