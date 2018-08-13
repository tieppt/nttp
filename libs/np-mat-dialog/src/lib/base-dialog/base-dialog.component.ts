import { Component, OnInit, Input, TemplateRef, Type, SimpleChanges, OnChanges } from '@angular/core';
import { DialogType } from '../dialog.model';

@Component({
  selector: 'np-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss']
})
export class BaseDialogComponent<T = any> implements OnInit, OnChanges {
  @Input()
  title: string | TemplateRef<T> | Type<T> = 'Modal Title';
  @Input()
  content: string | TemplateRef<T> | Type<T> = 'Modal Content';
  @Input()
  actions: TemplateRef<T> | Type<T>;

  @Input()
  type: DialogType | string = '';

  titleType = 0;
  contentType = 0;
  actionsType = 0;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const title = changes && changes.title && changes.title.currentValue;
    const content = changes && changes.content && changes.content.currentValue;
    const actions = changes && changes.actions && changes.actions.currentValue;
    this.update({
      title,
      content,
      actions
    });
  }

  public update(changes) {
    if ('title' in changes) {
      const { title } = changes;
      if (typeof title === 'string') {
        this.titleType = 0;
      } else if (title instanceof TemplateRef) {
        this.titleType = 1;
      } else {
        this.titleType = 2;
      }
    }
    if ('content' in changes) {
      const { content } = changes;
      if (typeof content === 'string') {
        this.contentType = 0;
      } else if (content instanceof TemplateRef) {
        this.contentType = 1;
      } else {
        this.contentType = 2;
      }
    }
    if ('actions' in changes) {
      const { actions } = changes;
      if (actions instanceof TemplateRef) {
        this.actionsType = 1;
      } else {
        this.actionsType = 2;
      }
    }
  }

  ngOnInit() {}
}
