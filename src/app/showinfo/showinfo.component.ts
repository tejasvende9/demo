import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showinfo',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './showinfo.component.html',
  styleUrl: './showinfo.component.css'
})
export class ShowinfoComponent implements OnInit {

  infodata:any=[];
  msg:any;

  constructor(private h:HttpClient){
  }
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData()
  {
    this.h.get('http://localhost/Angular_php/show-info.php').subscribe(
      (response)=>{
        this.infodata=response;
      }
    )
  }

  deletedata(s:any)
  {
    this.h.post('http://localhost/Angular_php/deleteinfo.php',s).subscribe(
      (response:any)=>{
        this.msg=response;
      }
    )    
    this.loadData();

    
  }

}
