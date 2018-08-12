import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'np-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss']
})
export class BaseDialogComponent implements OnInit {
  @Input()
  message = '';
  constructor() {}

  ngOnInit() {}
}
