import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [AppComponent, ToDoListComponent, ToDoItemComponent, HeaderComponent, AddToDoComponent, AboutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
