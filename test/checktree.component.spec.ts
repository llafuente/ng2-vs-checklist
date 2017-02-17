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
  selector: 'checktree-test',
  template: `
  <checktree [nodes]="treeData" [model]="values"></checktree>
  `
})
class TestComponent {
  values: string[] = [];
  treeData: any[] = [{
      id: null,
      selectChildren: true, // when click on Europe will check everything below
      label: 'Europa',
      children: [{
        id: 'es',
        label: 'Spain'
      }, {
        id: 'fr',
        label: 'France'
      }, {
        id: 'it',
        label: 'Italy'
      }]
    }, {
      id: null,
      selectChildren: true,
      label: 'Asia',
      children: [{
        id: 'jp',
        label: 'japan'
      }, {
        id: 'ch',
        label: 'China'
      }, {
        id: 'it',
        label: 'Italy'
      }]
    }];
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

      //console.log(fixture.nativeElement.innerHTML);

      expect(fixture.componentInstance.values).to.deep.equal([]);

      const spain: HTMLElement = fixture.nativeElement.querySelector('[ng-reflect-value="es"]');
      spain.click();

      expect(fixture.componentInstance.values).to.deep.equal(['es']);

      const france: HTMLElement = fixture.nativeElement.querySelector('[ng-reflect-value="fr"]');
      france.click();

      expect(fixture.componentInstance.values).to.deep.equal(['es', 'fr']);

      const italy: HTMLElement = fixture.nativeElement.querySelector('[ng-reflect-value="it"]');
      italy.click();


      expect(fixture.componentInstance.values).to.deep.equal(['es', 'fr', 'it']);

      // this is necessary, now.
      fixture.detectChanges();

      // europe must be checked
      const europe: HTMLInputElement = fixture.nativeElement.querySelector('[ng-reflect-value="es,fr,it"]');
      expect(europe.checked).to.equal(true);

      /*

      const c0 = fixture.nativeElement.querySelector('#check0');
      const c1 = fixture.nativeElement.querySelector('#check1');
      const c2 = fixture.nativeElement.querySelector('#check2');



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
      */
  });
});
