import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationService } from '../information.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  infoForm:  Data = {
    id: 0,
    title: '',
    name: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private service: InformationService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.service.getById(id).subscribe((data) => {
      this.infoForm = data;
    });
  }
 
  update() {
    this.service.update(this.infoForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/info/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
