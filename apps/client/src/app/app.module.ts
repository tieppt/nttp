import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { CoreModule, TOKEN_ID, TOKEN_TYPE } from '@nttp/web/core';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
registerLocaleData(en);

function getTokenId(): string {
  // logic here
  return 'Token_ID';
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule.forRoot(APP_ROUTES),
    CoreModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: TOKEN_TYPE, useValue: 'Bearer' },
    { provide: TOKEN_ID, useFactory: getTokenId }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
