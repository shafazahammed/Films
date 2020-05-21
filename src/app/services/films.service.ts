import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiUrl} from '.././app.constant';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  createFilm(film : any){
    return this.http.post<{file: string;success:boolean}>(ApiUrl + 'films/create', film)
      .pipe(
        map((result:any) => {
          console.log('result',result)
          if(result.success){
            return true;
          }
        })
      );
  }

  getAllFilms(){
    return this.http.post<{result:any}>(ApiUrl + 'films/getAllfilms',{})
      .pipe(
        map((result:any) => {
          return result;
        })
      );
  }

  getFilm(id : any){
    return this.http.post<{file: string;success:boolean}>(ApiUrl + 'films/getfilm',{id : id})
      .pipe(
        map((result:any) => {
          return result;
        })
      );
  }

  postComment(comment,filmid){
    return this.http.post<{file: string;success:boolean}>(ApiUrl + 'films/comment',{comment,filmid})
      .pipe(
        map((result:any) => {
          return result;
        })
      );
  }

  getAllComments(film_id){
    return this.http.post<{result:any}>(ApiUrl + 'comments/getAllcomments',{film_id})
      .pipe(
        map((result:any) => {
          return result;
        })
      );
  }
}
