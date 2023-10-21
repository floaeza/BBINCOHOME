import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ImagesLoaderService } from 'src/app/bbinco/services/images-loader.service';

@Directive({
  selector: '[CustomLoader]'
})
export class CustomLoaderDirective {
  constructor (
    private el: ElementRef,
    private imageService: ImagesLoaderService
  ){
    imageService.imageLoading(el.nativeElement);
  }
  @HostListener('load')
  onLoad() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }

  @HostListener('error')
  onError() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }
}
