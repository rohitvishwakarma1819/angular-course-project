import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
})
export class DropdownDirective {
  @HostBinding('class.open') open = false;
  // @HostListener('click') toggleDropDown() {
  //   this.open = !this.open;
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.open = this.elRef.nativeElement.contains(event.target)
      ? !this.open
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
