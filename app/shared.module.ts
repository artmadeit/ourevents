// A module that bring us the common used modules
// like material, forms, common modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';
import { MdMenuModule } from '@angular2-material/menu';

@NgModule({
    imports: [
        MdMenuModule.forRoot()
    ],
    exports: [
        CommonModule,
        FormsModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdIconModule,
        MdToolbarModule,
        MdListModule,
        MdInputModule,
        MdMenuModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
