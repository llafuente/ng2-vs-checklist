// https://github.com/amaanm/ng2-checklist/blob/master/src/checklist.ts

import { Component, Input, OnInit } from '@angular/core';

export class CheckTreeNode {
  __id: string[];
  id: string;
  label: string;
  selectChildren: boolean;
  children: CheckTreeNode[];
};

@Component({
  selector: 'checktree',
// <pre>
// nodes: {{nodes | json}}
// model: {{model | json}}
// </pre>
  template: `
<div>
  <div class="col-sm-12" *ngFor="let node of nodes">
    <div class="form-check">
      <label class="form-check-label">
      <input
        class="form-check-input"
        type="checkbox"
        [value]="node.__id"
        [checklist]="model"
        /> {{node.label}}
      </label>
    </div>
    <div class="offset-col-sm-1 col-sm-11">
      <checktree [nodes]="node.children" [model]="model"></checktree>
    </div>
</div>

  `
})

export class CheckTreeComponent implements OnInit {
  @Input() nodes: CheckTreeNode[];
  @Input() model: [string];

  applyDefaults(node: CheckTreeNode): void {
    if (node.selectChildren) {
      node.__id = this.getChildrenIds(node);
    } else {
      node.__id = [node.id];
    }
  }

  getChildrenIds(node: CheckTreeNode): string[] {
    var ret: string[] = [];

    if (node.id) {
      ret.push(node.id);
    }

    if (node.children) {
      for (var i: number = 0; i < node.children.length; ++i) {
        ret = ret.concat(this.getChildrenIds(node.children[i]));
      }
    }

    return ret;
  }

  ngOnInit(): void {
    if (this.nodes) {
      for (var i: number = 0; i < this.nodes.length; ++i) {
        this.applyDefaults(this.nodes[i]);
      }
    }
  }

  selectChildren(node: CheckTreeNode, recursive: boolean = true): void {
    if (!node.children || !node.children.length) return;

    for (var i: number = 0; i < node.children.length; ++i) {
      this.model.push(node.children[i].id);
      if (recursive) {
        this.selectChildren(node.children[i]);
      }
    }
  }
}
