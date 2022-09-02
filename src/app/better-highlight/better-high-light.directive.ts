import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]'
})
export class BetterHighLightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'gray';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'gray', false, false);
    
  }

  @HostListener('mouseenter') mouseover(eventDate: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'gray');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
