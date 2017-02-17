import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
  <h1>Checklist Directive</h1>
  <div>
    <input type="checkbox" value="a" [checklist]="values" id="check0" /> a
  </div>
  <div>
    <input type="checkbox" value="b" [checklist]="values" id="check1" /> b
  </div>
  <div>
    <input type="checkbox" value="c" [checklist]="values" id="check2" /> c
  </div>
  <pre>values: {{values | json}}</pre>

  <h1>Checktree Component</h1>
  <checktree [nodes]="treeData" [model]="values2"></checktree>
  <pre>values2: {{values2 | json}}</pre>
  `
})
export class Demo {
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
      }]
    }, {
      id: 'au',
      label: 'Australia (no select childrens)',
      children: [{
        id: 'ph',
        label: 'Philippines'
      }]
    }];
  values2: string[] = [];
}
