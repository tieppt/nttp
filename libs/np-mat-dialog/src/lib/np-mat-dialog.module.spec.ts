import { async, TestBed } from '@angular/core/testing';
import { NpMatDialogModule } from './np-mat-dialog.module';

describe('NpMatDialogModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NpMatDialogModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NpMatDialogModule).toBeDefined();
  });
});
