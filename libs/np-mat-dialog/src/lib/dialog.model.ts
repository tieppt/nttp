import { TemplateRef, Type } from '@angular/core';

export class DialogOptions<T = any> {
  public title?: string | TemplateRef<T> | Type<T>;
  public content: string | TemplateRef<T> | Type<T>;
  public actions?: TemplateRef<T> | Type<T>;
}

export type DialogType = 'info' | 'confirm' | 'success' | 'warning' | 'error';
