import { Component,OnInit } from '@angular/core';
import { Data } from '../data'; 
import { InformationService } from '../information.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allInfo: Data[] = [];
  idTodelete: number = 0;
  constructor(private service:InformationService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.service.get().subscribe((data) => {
      this.allInfo = data;
    });
  }
 
  delete(id:number) {
    this.service.delete(id).subscribe({
      next: (data) => {
        this.allInfo = this.allInfo.filter(_ => _.id != this.idTodelete)
      },
    });
  }
    idDelete(id:number){
      this.service.delete(id)
      .subscribe(data=>{
        this.get();
      })
  }
}
