import { Component, Input } from '@angular/core';
import {Chat} from '../chat';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

@Input() arrayKitten:Chat[] | undefined; 

name="";
race="";
naissance=new Date();
photo="";



  createKitten(){


this.arrayKitten?.push(new Chat(this.name,this.naissance,this.race,this.photo) )
  }
}
