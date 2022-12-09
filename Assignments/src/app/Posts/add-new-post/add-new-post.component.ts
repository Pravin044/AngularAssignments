import { Component, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IPostContent } from '../Interface/PostModelinterface';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent {
  // @Output() postContentSave = new EventEmitter<IPostContent>();
  title: string = "";
  image: string = "";
  content: string = "";
  postContent: IPostContent = { image: "", title: "", content: "" };

  constructor(private data: DataService, private routerService: Router) { }

  submit() {
    if (this.title != "" && this.image != "" && this.content != "") {
      console.log(this.title, this.image, this.content);
      this.postContent.image = this.image;
      this.postContent.title = this.title;
      this.postContent.content = this.content;
      // this.postContentSave.emit(this.postContent);
      this.data.setValue(this.postContent)
      this.routerService.navigate(["/posts"]);
    }
    else{
      alert("Please enter post details properly");
    }
  }

  clear() {
    this.title = "";
    this.image = "";
    this.content = "";
  }
}
