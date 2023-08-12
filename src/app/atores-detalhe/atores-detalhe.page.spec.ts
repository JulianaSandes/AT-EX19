import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtoresDetalhePage } from './atores-detalhe.page';

describe('AtoresDetalhePage', () => {
  let component: AtoresDetalhePage;
  let fixture: ComponentFixture<AtoresDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtoresDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
