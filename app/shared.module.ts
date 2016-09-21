// A module that bring us the common used modules
// like material, forms, common modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO remove FormsModule..use ReactiveFormModule instead
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// FIX this in ng2-custom-validation..to use ng2-custom-validation/core 
import { ValidationMessagesModule } from 'ng2-custom-validation/src/index';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';
import { MdMenuModule } from '@angular2-material/menu';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdRadioModule } from '@angular2-material/radio';

@NgModule({
    imports: [
        MdMenuModule.forRoot(),
        ValidationMessagesModule.forRoot(),
        MdGridListModule.forRoot(),
        MdRadioModule.forRoot()
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdIconModule,
        MdToolbarModule,
        MdListModule,
        MdInputModule,
        MdMenuModule,
        MdGridListModule,
        MdRadioModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
