import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';
import { NpMatDialogModule } from '@nttp/np-mat-dialog';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, BrowserModule, NxModule.forRoot(), NpMatDialogModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
