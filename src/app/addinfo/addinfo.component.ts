import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-addinfo',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './addinfo.component.html',
  styleUrl: './addinfo.component.css'
})
export class AddinfoComponent {

  msg="record added succefully";

  constructor(private h:HttpClient){

  }

  myform=new FormGroup({
    nm:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    hobby:new FormControl('',[Validators.required]),
    que:new FormControl('',[Validators.required]),
    em:new FormControl('',[Validators.required]),
    pwd:new FormControl('',[Validators.required])
  });


  demo()
  { 
    let infog={

      name:this.myform.value.nm,
      dob :this.myform.value.dob,
      gender:this.myform.value.gender,
      hobby:this.myform.value.hobby,
      que:this.myform.value.que,
      em:this.myform.value.em,
      pwd:this.myform.value.pwd
    }

    this.h.post('http://localhost/Angular_php/add-info.php',infog).subscribe(
      (response:any)=>{
        this.msg=response;
      }
    )
    alert(this.msg);
  };

  
}
