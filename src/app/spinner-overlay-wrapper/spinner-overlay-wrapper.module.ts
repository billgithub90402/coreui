import { SpinnerModule } from '../spinner/spinner.module';
import { NgModule } from '@angular/core';
import { SpinnerOverlayWrapperComponent } from '../spinner-overlay-wrapper/spinner-overlay-wrapper.component';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [SpinnerModule,
        CommonModule,
        BrowserModule],
    declarations: [SpinnerOverlayWrapperComponent],
    exports: [SpinnerOverlayWrapperComponent]
})
export class SpinnerOverlayWrapperModule {
}
