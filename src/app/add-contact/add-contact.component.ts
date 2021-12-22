import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contacts=[
    [
      "Mithilesh",
      "mithilesh@gmail.com",
      "8678575985",
      'assets/images/img1.png'
    ],
    [
      "Manow",
      "manow@gmail.com",
      "9686876541",
      'assets/images/img1.png'
    ],
    [
      "Mei",
      "mei@gmail.com",
      "7688948474",
      'assets/images/img1.png'
    ],
  ];
  name='';
  email='';
  phone='';
  image='';
  
  constructor() {  }
  
  ngOnInit(): void {
  }
  i=3;
  addContact(){
    
    console.log(this.image);
    this.contacts.push([this.name,this.email,this.phone,'assets/images/'+this.image+'.png']);
    console.log(this.name);
  }
}
