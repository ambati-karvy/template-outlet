import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';
import { CardItemDirective } from '../card-item.directive';
import { ListItemDirective } from '../list-item.directive';

@Component({
  selector: 'app-card-or-list-view',
  templateUrl: './card-or-list-view.component.html',
  styleUrls: ['./card-or-list-view.component.css']
})
export class CardOrListViewComponent implements OnInit {

  @Input() items: {header: string,content: string}[] = [];
  @Input() mode: 'card' | 'list' = 'card';

  @ContentChild(CardItemDirective, {read: TemplateRef,static: false}) cardItemTemplate;
  @ContentChild(ListItemDirective, {read: TemplateRef,static: false}) listItemTemplate;
  constructor() { }

  ngOnInit() {
  }

}
