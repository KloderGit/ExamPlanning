import { AppComponent } from './../App.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ServiseFromJson } from './../Services/servise-from-json'

import { HttpModule } from '@angular/http';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule  ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ ServiseFromJson ]
})

export class MainModule {}