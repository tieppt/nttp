import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TOKEN_TYPE, TOKEN_ID } from '../tokens';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(@Inject(TOKEN_TYPE) private tokenType, @Inject(TOKEN_ID) private tokenId) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    const request = req.clone({
      setHeaders: {
        Authorization: `${this.tokenType} ${this.tokenId}`
      }
    });

    return next.handle(request);
  }
}
