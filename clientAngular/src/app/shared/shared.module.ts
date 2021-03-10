import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { UsersCounterComponent } from '../users-counter/users-counter.component';
const config: SocketIoConfig = {url:'http://localhost:8082',options:{}};
import{MatDividerModule} from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    UsersCounterComponent,
  ],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    FormsModule,
   // NgbModule,
    MatDialogModule,
    MatTableModule,
    MatSidenavModule,
    BrowserModule,


  ],
  exports:[    
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    UsersCounterComponent
  ]
})
export class SharedModule { }
