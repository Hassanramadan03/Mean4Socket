import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "../default.component";
import { SettingsComponent } from "./settings.component";
import { LayoutModule } from "../../../layouts/layout.module";


const routes: Routes = [

    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': SettingsComponent,
            },

        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        LayoutModule
    ],
    declarations: [
        SettingsComponent
    ]
})
export class SettingsModule {
}
