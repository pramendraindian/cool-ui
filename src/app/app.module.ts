import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './app-config.service';
import { TimelineComponent } from './timeline/timeline.component';
import { ChartFactoryComponent } from './chart-factory/chart-factory.component';
@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    ChartFactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    TimelineModule,
    CardModule,
    HttpClientModule
  ],
  providers: [AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
