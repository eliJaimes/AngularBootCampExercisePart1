/* ••[1]••••••••••••••••••••••••• app.module.ts •••••••••••••••••••••••••••••• */

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, ComponentsModule],
	providers: [],
})
export class AppModule {}
