import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { ProfileComponent } from "./profile.component";
import { ProfileService } from './profile.service';
import { FeedService } from '../feed/feed.service';
// import { PostsComponent } from '../posts/posts.component';
import { PostsModule } from "../posts/posts.module";
// import { Ng4FilesModule } from './../../../../../../node_modules/angular4-files-upload/index';
const routes: Routes = [

    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': ProfileComponent,
            },

        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        LayoutModule, PostsModule
    ], exports: [
        RouterModule,
    ], declarations: [
        ProfileComponent,
    ],
    providers: [ProfileService, FeedService]
})
export class ProfileModule {
}