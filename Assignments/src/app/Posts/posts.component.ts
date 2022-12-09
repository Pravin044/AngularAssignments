import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { IPostContent } from './Interface/PostModelinterface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postContentModel: IPostContent[] = [];
  postCount: string = "25"

  constructor(private data: DataService) {

    this.postContentModel.push({
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      title: "Test",
      content: "hjahjdfjahsdfhjafsjd"

    })

    this.postCount = this.postContentModel.length.toString();


   
  }
  ngOnInit(): void {
    const subscription = this.data.getValue();
    subscription.subscribe({
     next:(data:IPostContent)=>{
       this.UpLoadPost(data)
     },
     error:(error)=>{console.log(error);
     }
   })

  }

  UpLoadPost(data: any) {
    if(data!=undefined)
    {
      this.postContentModel.push(data);
    this.postCount=this.postContentModel.length.toString();
    }

  }
}

