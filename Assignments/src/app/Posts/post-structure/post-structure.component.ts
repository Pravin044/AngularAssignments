import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-structure',
  templateUrl: './post-structure.component.html',
  styleUrls: ['./post-structure.component.css']
})
export class PostStructureComponent {
  @Input()
  Image: string = "";
  @Input()
  title: string = "";
  @Input()
  content: string = "";

}
