import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "../default.component";
import { LayoutModule } from "../../../layouts/layout.module";
import { UsersComponent } from './users.component';
import { ContentCreatorsComponent } from './content-creators/content-creators.component';
import { ContentCreatorsManagersComponent } from './content-creators-managers/content-creators-managers.component';


const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'content-creators',
                component: ContentCreatorsComponent
            },
            {
                path: 'content-creators-managers',
                component: ContentCreatorsManagersComponent
            },
            {
                path: '',
                component: ContentCreatorsManagersComponent,
                redirectTo: 'dashboard'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        LayoutModule
    ],
    declarations: [
        DashboardComponent,
        UsersComponent,
        ContentCreatorsComponent,
        ContentCreatorsManagersComponent
    ]
})
export class AdminModule {
}
