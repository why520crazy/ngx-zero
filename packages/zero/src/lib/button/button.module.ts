import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoButtonComponent } from './button.component';

@NgModule({
    declarations: [ZoButtonComponent],
    imports: [CommonModule],
    exports: [ZoButtonComponent]
})
export class ZoButtonModule {}
