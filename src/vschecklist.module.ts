import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckTreeComponent} from './checktree.component';
import {CheckListDirective} from './checklist.directive';

@NgModule({
  declarations: [
    CheckListDirective,
    CheckTreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckListDirective,
    CheckTreeComponent
  ]
})
export class VSChecklistModule {}
