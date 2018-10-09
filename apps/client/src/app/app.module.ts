import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule, TOKEN_ID, TOKEN_TYPE } from '@nttp/web/core';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
function getTokenId(): string {
  // logic here
  return 'Token_ID';
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    CoreModule
  ],
  providers: [
    {
      provide: TOKEN_TYPE,
      useValue: 'Bearer'
    },
    {
      provide: TOKEN_ID,
      useFactory: getTokenId
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
