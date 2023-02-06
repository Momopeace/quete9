import { Component, Input, OnInit } from '@angular/core';
import { Chat } from '../chat';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit{
  @Input() arrayUtilisateur : Chat[] | any = [];
   array = [];
   ngOnInit(){
    this.array= this.arrayUtilisateur;
   }
   
   changeText:boolean=true;

}
