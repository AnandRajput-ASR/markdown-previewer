import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownPreviewComponent } from './markdown-preview/markdown-preview.component';

const routes: Routes = [
  // { path: '', component: MarkdownPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
