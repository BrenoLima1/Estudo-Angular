import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoProdutos } from './resumo-produtos';

describe('ResumoProdutos', () => {
  let component: ResumoProdutos;
  let fixture: ComponentFixture<ResumoProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
