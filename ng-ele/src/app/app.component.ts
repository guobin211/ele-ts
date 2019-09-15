import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-ele';

  menuTabs = [
    {id: 0, text: '男装', path: ''},
    {id: 1, text: '女装', path: ''},
    {id: 2, text: '童装', path: ''},
    {id: 3, text: '电子', path: ''},
    {id: 4, text: '食品', path: ''},
    {id: 5, text: '鞋类', path: ''},
    {id: 6, text: '特价', path: ''},
    {id: 7, text: '活动现场', path: ''},
  ];
}
