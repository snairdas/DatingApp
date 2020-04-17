import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    // First match wins
    { path: '', component: HomeComponent },
    {
        path: '',   // Empty path  e.g. localhost/ + ''
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],   // Protect all children, only allow if logged in - See app/_guards/auth.guards.ts
        children: [
            { path: 'members', component: MemberListComponent },    // localhost/members    match as path above is empty
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }    // Catch all other routes and redirect home
];
