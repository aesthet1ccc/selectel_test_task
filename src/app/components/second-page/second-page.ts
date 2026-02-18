import { Component, OnInit } from '@angular/core';
import { MenuData, menuData, MenuItem } from '../../data/menu-data';

@Component({
  selector: 'app-second-page',
  imports: [],
  templateUrl: './second-page.html',
  styleUrl: './second-page.scss',
})
export class SecondPage implements OnInit {
  menu = menuData;

  selectedType = this.menu[0];

  selectType(type: MenuData) {
    this.selectedType = type;
  }

  activeCheckbox(item: MenuItem) {
    item.selected = !item.selected;
  }

  selectedCount = (): number => {
    return this.selectedType.items.filter((value) => value.selected).length;
  };

  sumValues = (): number => {
    return this.selectedType.items
      .filter((item) => item.selected)
      .reduce((sum, value) => {
        return sum + value.value;
      }, 0);
  };

  ngOnInit(): void {
    console.log(this.menu[0].items);
  }
}
