import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { FilmsService } from '../../services/films.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { filepath }  from '../../app.constant';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name:string;
  description: string;
  country:string;
  releasedate: any;
  rating:number;
  ticketprice:number;
  genre: any = [];
  photo : string;
  image : string;
  invalid:boolean = false;
  invalidphoto : boolean = false;
  success : boolean = false ;
  onUpload :boolean = false;
  onSubmit :boolean = false;
  dropdownList = ['Action','Thriller','Horror', 'Comedy','Drama', 'Romance', 'Sci-Fi', 'Adventure'];
  dropdownSettings : IDropdownSettings = {
    singleSelection: false,
    itemsShowLimit: 10,
    allowSearchFilter: true
  };
  mindate;
  uploaderror:string;


  constructor(private films : FilmsService, private Upload : UploadService) { }

  ngOnInit(): void {
    let today= new Date();
    this.mindate = {year : today.getFullYear(),month: today.getMonth()+1, day: today.getDate()}
  }

  submit(){
    console.log('name',this.name);
    console.log('desc',this.description);
    console.log('name',this.country);
    console.log('release',this.releasedate);
    console.log('reating',this.rating);
    console.log('ticket',this.ticketprice);
    console.log('genre',this.genre);
    console.log('image',this.image);
    if(this.name == null || this.description == null || this.country== null || this.releasedate==null || this.rating ==null|| this.ticketprice == null || this.genre == []|| this.image == null){
      console.log('error');
      return this.invalid = true;
    }

    this.releasedate = this.releasedate.year+'-'+this.releasedate.month+'-'+this.releasedate.day;

    let film = {
      name : this.name,
      description : this.description,
      country : this.country,
      releasedate : this.releasedate,
      ticketprice : this.ticketprice,
      rating : this.rating,
      genre : this.genre,
      photo : this.image
    }

    console.log('film',film);

    this.onSubmit = true;

    this.films.createFilm(film).subscribe(res =>{
      this.onSubmit = false;
      // this.image = "";

    })


  }

  uploadImage(){
    if(this.photo == null){
      return this.invalid = true;
    }
    this.onUpload = true;
    this.Upload.upload(this.photo).subscribe( (res:any) =>{
      if(res.success){
        res.file = res.file.replace('/public','');
        this.image = filepath + res.file;
        console.log('image',this.image);
      }
      else{
        this.uploaderror = res.message;
      }
      this.onUpload = false;
      console.log('upload',this.onUpload);
    },
    err =>{
      this.onUpload = false;
    })

  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.photo = file;
    }
    console.log('file',this.photo);
  }

  onItemSelect(item) {
    console.log(item);
    this.genre.push(item);
    this.genre = this.genre.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })

  }
  onSelectAll(items: any) {
    this.genre.push(items);
    this.genre = this.genre.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
  }

}
