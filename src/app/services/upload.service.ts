import { Injectable } from '@angular/core';
import { Router} from '@angular/router'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiUrl} from '.././app.constant';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient,private route:Router) { }

  upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{file: string;success:boolean}>(ApiUrl + 'uploadImage', formData)
      .pipe(
        map((result:any) => {
          console.log('result',result)
          if(result.success){

            // localStorage.setItem('access_token', result.access_token);
            return result;
          }
        })
      );
  }
}
