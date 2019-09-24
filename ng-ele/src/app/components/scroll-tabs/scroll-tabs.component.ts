import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-scroll-tabs',
  templateUrl: './scroll-tabs.component.html',
  styleUrls: ['./scroll-tabs.component.scss']
})
export class ScrollTabsComponent implements OnInit {

  @Input() tabsData: any[];
  @Output()
  tabChange: EventEmitter<any> = new EventEmitter<any>();
  currentIndex = 0;

  ngOnInit() {
  }

  handleClick(item: any, index: number) {
    this.currentIndex = index;
    this.tabChange.emit(item);
  }

  handleScroll(ev: Event) {
    ev.stopPropagation();
    ev.preventDefault();
  }
}
