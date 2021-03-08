import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UsersCounterComponent } from './users-counter/users-counter.component';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
const config: SocketIoConfig = {url:'http://localhost:8082',options:{}};

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    UsersCounterComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
