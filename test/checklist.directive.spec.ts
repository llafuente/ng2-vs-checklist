import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  async,
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {VSChecklistModule} from '../src';

@Component({
  selector: 'checklist-test',
  template: `
  <input type="checkbox" value="a" [checklist]="values" id="check0" />
  <input type="checkbox" value="b" [checklist]="values" id="check1" />
  <input type="checkbox" value="c" [checklist]="values" id="check2" />
  `
})
class TestComponent {
  values: string[] = [];
}

describe('checklist directive', () => {

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [VSChecklistModule],
        declarations: [TestComponent]
      })
      .compileComponents();
  }));

  it('should not give problems!', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
      fixture.detectChanges();

      /*
      const c0 = fixture.debugElement.query(By.css('#check0'));
      const c1 = fixture.debugElement.query(By.css('#check1'));
      const c2 = fixture.debugElement.query(By.css('#check2'));
      */

      const c0: HTMLInputElement = fixture.nativeElement.querySelector('#check0');
      const c1: HTMLInputElement = fixture.nativeElement.querySelector('#check1');
      const c2: HTMLInputElement = fixture.nativeElement.querySelector('#check2');

      expect(fixture.componentInstance.values).to.deep.equal([]);

      expect(c0.value).to.equal('a');
      expect(c1.value).to.equal('b');
      expect(c2.value).to.equal('c');

      c0.click();
      fixture.detectChanges();
      expect(fixture.componentInstance.values).to.deep.equal(['a']);

      c1.click();
      fixture.detectChanges();
      expect(fixture.componentInstance.values).to.deep.equal(['a', 'b']);

      c2.click();
      fixture.detectChanges();
      expect(fixture.componentInstance.values).to.deep.equal(['a', 'b', 'c']);

      c2.click();
      fixture.detectChanges();
      expect(fixture.componentInstance.values).to.deep.equal(['a', 'b']);
  });
});
