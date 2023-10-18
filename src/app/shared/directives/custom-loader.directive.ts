import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[CustomLoader]'
})
export class CustomLoaderDirective {
  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  @Input() set CustomLoader(loading: boolean) {
    if( !this.htmlElement )return;
    if (loading) {
      this.htmlElement!.nativeElement.style.opacity = '1';
    } else {
      this.htmlElement!.nativeElement.style.opacity = '0';
    }
  }

}
