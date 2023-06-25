import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatTabsModule,
        
        //TabsModule.forRoot(),
        //TooltipModule.forRoot(),
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right'
        }),
        NgxGalleryModule
    ],
    exports: [
        BrowserAnimationsModule,
        ToastrModule,
        MatTabsModule,
        NgxGalleryModule
    ]
})

export class SharedModule { }