// give some credits to
// https://github.com/amaanm/ng2-checklist/blob/master/src/checklist.ts

// Warning NOTE
// do not use: this.el.nativeElement.value
// neither: $event.target.value
// both are string only? wtf angular2?! seriously!?

import { Directive, ElementRef, Input } from '@angular/core';

@Directive(
  {
    selector: '[checklist]',
    host: {
      '(change)': 'onChange($event)',
      '[checked]': 'isChecked()'
    }
  }
)
export class CheckListDirective {
  @Input() value: string|string[];
  @Input('checklist') model: Array<string>;

  onChange($event: any): void {
    if (Array.isArray(this.value)) {
      if ($event.target.checked) {
        this.value.forEach((v) => {
          this.model.push(v);
        });
      } else {
        this.value.forEach((v) => {
          this.model.splice(this.model.indexOf(v), 1);
        });
      }
    } else {
      if ($event.target.checked) {
        this.model.push(this.value);
      } else {
        this.model.splice(this.model.indexOf(this.value), 1);
      }
    }
  }

  isChecked(): boolean {
    if (Array.isArray(this.value)) {
      return this.value.every((el) => {
        return this.model.indexOf(el) !== -1;
      });
    }

    return (this.model.indexOf(this.value) !== -1);
  }
}
