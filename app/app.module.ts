import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { GridAllModule, PageService, EditService, SortService, FilterService,ToolbarService } from '@syncfusion/ej2-ng-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridAllModule,
        ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [GridAllModule,PageService, EditService, SortService, FilterService,ToolbarService]
})
export class AppModule { }