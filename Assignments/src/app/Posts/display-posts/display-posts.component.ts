import { Component ,Input} from '@angular/core';
import { IPostContent } from '../Interface/PostModelinterface';

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.css']
})
export class DisplayPostsComponent {
@Input()
postContentModel:IPostContent[]=[];
constructor(){
 
}
}

