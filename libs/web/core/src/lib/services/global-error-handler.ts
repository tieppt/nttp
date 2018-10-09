import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    // TODO: log to backend service to trace later
    console.error('ERROR: ' + new Date());
    console.error(error);
  }
}
