import { Component,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-post-count',
  templateUrl: './display-post-count.component.html',
  styleUrls: ['./display-post-count.component.css']
})
export class DisplayPostCountComponent {
@Input()
PostCount:string="0";
constructor(){
}
}
