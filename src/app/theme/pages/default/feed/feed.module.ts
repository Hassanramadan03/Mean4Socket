import { FeedService } from './feed.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { FeedComponent } from './feed.component';
import {
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule

} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [

    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': FeedComponent,
            },

        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        LayoutModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatExpansionModule,
        FormsModule, ReactiveFormsModule, MatDividerModule
    ], declarations: [
        FeedComponent,
    ],
    providers: [FeedService]
})
export class FeedModule {
}