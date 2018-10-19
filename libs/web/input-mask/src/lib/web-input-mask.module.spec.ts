import { async, TestBed } from '@angular/core/testing';
import { WebInputMaskModule } from './web-input-mask.module';

describe('WebInputMaskModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebInputMaskModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebInputMaskModule).toBeDefined();
  });
});
