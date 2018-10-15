import { async, TestBed } from '@angular/core/testing';
import { WebAuthModule } from './web-auth.module';

describe('WebAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebAuthModule).toBeDefined();
  });
});
