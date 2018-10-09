import { CommonModule } from '@angular/common';
import { Inject, NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { throwIfNgModuleLoaded } from './module-utils';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CustomHttpInterceptor } from './interceptors/custom-http.interceptor';
import { GlobalErrorHandler } from './services/global-error-handler';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    @Inject(CoreModule)
    parentModule: CoreModule | null
  ) {
    throwIfNgModuleLoaded(parentModule, 'CoreModule');
  }
}
