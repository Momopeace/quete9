import { Component } from '@angular/core';
import { Chat } from './chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quete9';
  chats : Chat [] =[
    {name :"toto", naissance:new Date(10/11/2022),race:"goutiere",photo:"https://pixabay.com/get/gcf375a724e321b0de2bc939f7860d726cfe13909964ba76f800c498f5052776789ab7d4053d3540f619b41c7d028bcbf0a4959a0fd5722d4690d3d4f31032feda26ef7676b9cf954fea76f152e6d7cc4_640.jpg",},
    {name :"nico", naissance:new Date(10/12/2022),race:"enfoirée",photo:"https://pixabay.com/get/gcf375a724e321b0de2bc939f7860d726cfe13909964ba76f800c498f5052776789ab7d4053d3540f619b41c7d028bcbf0a4959a0fd5722d4690d3d4f31032feda26ef7676b9cf954fea76f152e6d7cc4_640.jpg",},
    {name :"yoyo", naissance:new Date(10/10/2022),race:"ouf",photo:"https://pixabay.com/get/gcf375a724e321b0de2bc939f7860d726cfe13909964ba76f800c498f5052776789ab7d4053d3540f619b41c7d028bcbf0a4959a0fd5722d4690d3d4f31032feda26ef7676b9cf954fea76f152e6d7cc4_640.jpg",},
  ];
  userChat:  Chat [] =[];



}
