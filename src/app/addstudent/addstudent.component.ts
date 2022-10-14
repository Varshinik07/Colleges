import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
  name=""
  rollno=""
  admission=""
parentname=""
college=""
dob=""
address=""
mobilenumber=""
parentnumber=""
emailid=""
bloodgroup=""

readValues=()=>{
  let data={
    "name":this.name,
  "rollno":this.rollno,
  "admission":this.admission,
"parentname":this.parentname,
"college":this.college,
"dob":this.dob,
"address":this.address,
"mobilenumber":this.mobilenumber,
"parentnumber":this.parentnumber,
"emailid":this.emailid,
"bloodgroup":this.bloodgroup
  }
 console.log(data)
}

  ngOnInit(): void {
  }

}
