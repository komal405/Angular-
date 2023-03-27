import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../data';
import { InformationService } from '../information.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  infoForm: Data = {
    id: 0,
    title: '',
    name : ''
  };
 
  constructor(private service:InformationService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.service.create(this.infoForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/info/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}