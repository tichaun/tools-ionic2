import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the MySlideyComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my-slidey',
  templateUrl: 'my-slidey.html'
})
export class MySlideyComponent {
  @Input("slides") slides: string[] = [];
  @Input("pageNumber") pageNumber: number = 5;
  @Output("slideClick") slideClick = new EventEmitter<number>()

  selectedIndex: number = 0;

  constructor(public events:Events) {
    console.log('Hello MySlideyComponent Component');
    this.events.subscribe('slide:index', (data) => {
      console.log("订阅的index"+data);
      this.selectedIndex = data;
    });
  }
  onClick(index) {
    this.selectedIndex = index;
    this.slideClick.emit(index);
  }
}
