import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ClientDetailsComponent } from './components/clientdetails/clientdetails.component';
import { ClientDetailsApi } from './components/api/client.api'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        ClientDetailsComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'client-details', component: ClientDetailsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ ClientDetailsApi ]
})
export class AppModuleShared {
}
