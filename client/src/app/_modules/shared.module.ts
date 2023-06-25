import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//import { TabsModule } from 'ngx-bootstrap/tabs';
//import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatTabsModule,
        NgxSpinnerModule.forRoot({
            type: 'square-jelly-box'
        }),
        
        //TabsModule.forRoot(),
        //TooltipModule.forRoot(),
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right'
        }),
        NgxGalleryModule,
        FileUploadModule
    ],
    exports: [
        BrowserAnimationsModule,
        ToastrModule,
        MatTabsModule,
        NgxSpinnerModule,
        NgxGalleryModule,
        FileUploadModule
    ]
})

export class SharedModule { }