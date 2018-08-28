import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { ProfileService } from './../profile/profile.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [PostsComponent],
    declarations: [PostsComponent],
    providers: [ProfileService]
})
export class PostsModule { }
