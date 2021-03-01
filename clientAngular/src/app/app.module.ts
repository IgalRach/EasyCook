import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UsersCounterComponent } from './users-counter/users-counter.component';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
const config: SocketIoConfig = {url:'http://localhost:8082',options:{}};

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    UsersCounterComponent
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
