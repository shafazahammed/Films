import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films : any[] =[{
    name : "",
    photo: "",
    genre : "",
    description : ""
  }];
  index:number = 0;

  constructor(private filmService : FilmsService,
     private route : Router) { }


  ngOnInit(): void {
    this.getAllFilms();
    console.log('index',this.index);
  }

  getAllFilms(){
    this.filmService.getAllFilms().subscribe( (data:any) =>{
      console.log('data',data);

      this.films = data.films;
      this.films.forEach(element => {
        element.genre = JSON.parse(element.genre);
      });

      console.log('fims',this.films);

    })
  }
  getDetail(){
    //pass an extra value as state with route navigate
    this.route.navigate(['films/',this.films[this.index].name],{state : {id : this.films[this.index].film_id}})

  }

  next():any{
    this.index++;
    console.log('index',this.index);
  }
  prev():any{
    this.index--;
  }


}
