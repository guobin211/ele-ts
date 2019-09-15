import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-tabs',
  templateUrl: './scroll-tabs.component.html',
  styleUrls: ['./scroll-tabs.component.scss']
})
export class ScrollTabsComponent implements OnInit {

  @Input() tabsData: any[];

  currentIndex = 0;

  constructor() { }

  ngOnInit() {
  }
  handleClick(item: any, index: number) {
    this.currentIndex = index;
    console.log(item);
  }
  handleScroll(ev: Event) {
    console.log(ev);
  }
}
