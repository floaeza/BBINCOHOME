import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customNav]'
})
export class CustomNavDirective implements OnInit{
  private htmlElement?: ElementRef<HTMLElement>;
  private _backgroundColor: string = '#052745';
  private _scrollPixels: number = 70;
  private hideTimer: undefined | ReturnType<typeof setTimeout>;

  constructor( private el: ElementRef<HTMLElement>){
    this.htmlElement = el;
  }
  ngOnInit(): void {

  }
  @HostListener('window:scroll', ['$event'])
  onScroll(){
    if( !this.htmlElement )return;
    if(window.scrollY > this._scrollPixels){
      this.htmlElement!.nativeElement.style.backgroundColor = this._backgroundColor;
    }else{
      this.htmlElement!.nativeElement.style.backgroundColor = 'transparent';
    }
    if (window.scrollY <= this._scrollPixels) {
      this.htmlElement.nativeElement.style.opacity = '0';
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
      }
    }
    if (window.scrollY === 0) {
      this.htmlElement.nativeElement.style.opacity = '1';
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
      }
    }

  }

  @HostListener('mouseenter')
  onMouseEnter(){
    if( !this.htmlElement )return;
    if (window.scrollY > this._scrollPixels) {
      this.htmlElement!.nativeElement.style.opacity = '1';
      if( this.hideTimer){
        clearTimeout(this.hideTimer);
      }
    }
    }
  @HostListener('mouseleave')
  onMouseLeave(){
    if( !this.htmlElement )return;
    if (window.scrollY > this._scrollPixels) {
      if(window.scrollY > this._scrollPixels){
        this.hideTimer = setTimeout(() => {
          this.htmlElement!.nativeElement.style.opacity = '0';
        }, 2000);
      }
    }
  }

}
