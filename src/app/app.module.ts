import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MetaTagsComponent } from './component/meta-tags/meta-tags.component';
import { MetaTagService } from './service/meta-tag.service';

@NgModule({
  declarations: [
    AppComponent,
    MetaTagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    MetaTagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
