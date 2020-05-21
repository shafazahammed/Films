import { Component, OnInit ,Input} from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {
  filmid : any  = { id : 0 };
  film : any ={
    film_id: '',
    name: '',
    description: '',
    genre : [],
    releasedate : '',
    ticketprice : '',
    country : '',
    rating : '',
    photo : ''
  };
  comments: any  = [];
  comment: any;
  message : any;
  isLoggedIn : boolean = false;
  posting : boolean = false;

  constructor(private films : FilmsService,
     private authService : AuthService,
      private route : Router,
      private location: Location) {
    this.filmid = this.route.getCurrentNavigation().extras.state; // collecting id from router extra parameter
  }

  ngOnInit(): void {
    //check authentication
    this.isLoggedIn = this.authService.loggedIn;
    console.log('logged',this.isLoggedIn);
    this.getFilm();
    console.log('film',this.filmid.id);
  }

  // get film id its id
  getFilm(){
    this.films.getFilm(this.filmid.id).subscribe((res:any) =>{
      console.log('res',res);
      this.film = res.film;
      this.film.genre = JSON.parse(this.film.genre);
      console.log('film',this.film);
      this.comments = res.comments;
    })
  }

  postComment(){
    console.log('comments',this.comment);
    if(this.comment == null || this.comment =='') {
      return false;
    }
    this.posting = true;
    this.films.postComment(this.comment,this.film.film_id).subscribe( res =>{
      this.posting = false;
      if(res.status){
        this.getComments();
        this.comment = ''
      }

    })
  }
  back(){
    this.location.back();
  }
  getComments(){
    console.log('comments',this.comment);
    if(this.comment == null){
      return false;
    }
    this.films.getAllComments(this.film.film_id).subscribe( res =>{

       this.comments = res.comments
    })
  }

}
