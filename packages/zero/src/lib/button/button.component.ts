import { Component, OnInit, Input, ElementRef } from '@angular/core';

export type ButtonTypes =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';

@Component({
    selector: 'zo-button,[zoButton]',
    template: '<ng-content></ng-content>'
})
export class ZoButtonComponent implements OnInit {
    @Input() zoType: ButtonTypes;

    constructor(private element: ElementRef<Element>) {}

    ngOnInit() {
        this.element.nativeElement.classList.add(`btn`);
        this.element.nativeElement.classList.add(`btn-${this.zoType}`);
    }
}
