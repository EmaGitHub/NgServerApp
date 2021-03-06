import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';

import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module'
import { RootModule } from './root/root.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientService } from './core/http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseModule } from './database/database.module';
import { DatabaseNoSqlModule } from './database-nosql/database-nosql.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    HttpClientModule,
    SharedModule,
    LoginModule,
    RootModule,
    DatabaseModule,
    DatabaseNoSqlModule,
    AppRoutingModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
