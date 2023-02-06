import { Component, Input } from '@angular/core';
import { Chat } from '../chat';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
@Input() arrayKitten : Chat[] | undefined;
@Input() arrayUtilisateur : Chat[] | undefined;

adoptCat(chat:Chat,index:number){
this.arrayUtilisateur?.push(chat);
 this.arrayKitten?.splice(index,1);

}
}