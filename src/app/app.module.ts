import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { CreateDataComponent } from './data/create-data/create-data.component';
import { UpdateDataComponent } from './data/update-data/update-data.component';
import { ReadDataComponent } from './data/read-data/read-data.component';
import { DeleteDataComponent } from './data/delete-data/delete-data.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarDropDownDirective } from './navbar-drop-down.directive';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ListDataComponent } from './data/list-data/list-data.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    CreateDataComponent,
    UpdateDataComponent,
    ReadDataComponent,
    DeleteDataComponent,
    HeaderComponent,
    FooterComponent,
    NavbarDropDownDirective,
    IndexComponent,
    ListDataComponent,
    SearchComponent,
    SearchFormComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
