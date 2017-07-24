import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { AppComponent }  from './app.component';
import { routing } from "./routes";
import { HomeModule } from "./modules/home/home.module";
import {AnimationChecker} from "./providers/AnimationChecker";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgSemanticModule,
        HomeModule,
        routing
    ],
    providers: [
        AnimationChecker
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
