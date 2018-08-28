import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';

const routes: Routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': 'feed',
                'loadChildren': './pages/default/feed/feed.module#FeedModule',
            },
            {
                'path': 'messages',
                'loadChildren': './pages/default/messages/messages.module#MessagesModule',
            },
            {
                'path': 'settings',
                'loadChildren': './pages/default/settings/settings.module#SettingsModule',
            },
            {
                'path': 'admin',
                'loadChildren': './pages/default/admin/admin.module#AdminModule',
            },
            {
                'path': ':userName',
                'loadChildren': './pages/default/profile/profile.module#ProfileModule',
            },
            {
                'path': 'userprofile/:id',
                'loadChildren': './pages/default/profile/profile.module#ProfileModule',
            },
            {
                'path': '',
                'redirectTo': 'feed',
                'pathMatch': 'full',
            },
        ],
    },
    {
        'path': '**',
        'redirectTo': 'feed',
        'pathMatch': 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes),],
    exports: [RouterModule],
})
export class ThemeRoutingModule {
}