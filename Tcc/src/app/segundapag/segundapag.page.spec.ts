import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegundapagPage } from './segundapag.page';

describe('SegundapagPage', () => {
  let component: SegundapagPage;
  let fixture: ComponentFixture<SegundapagPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SegundapagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
