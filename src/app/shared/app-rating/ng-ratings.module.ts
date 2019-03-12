import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRatingsComponent } from './ng-ratings.component';

    @NgModule({
      imports: [
        CommonModule
      ],
      declarations: [NgRatingsComponent],
      exports: [NgRatingsComponent]
    })
    export class NgRatingsModule { }
