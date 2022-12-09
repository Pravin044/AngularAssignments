import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';

const routes: Routes = [
    {path:"add",component:AddNewPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }