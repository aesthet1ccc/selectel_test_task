import { Component } from '@angular/core';
import { menuData } from '../../data/menu-data';
import { MenuData, MenuItem } from '../../data/menu-types';

@Component({
  selector: 'app-menu-page',
  imports: [],
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.scss',
})
export class MenuPage {
  menu = menuData;

  selectedType = this.menu[0];

  selectType(type: MenuData) {
    this.selectedType = type;
  }

  onChangeCheckboxStatus(item: MenuItem) {
    item.selected = !item.selected;
  }

  getSelectedCount = (): number => {
    return this.selectedType.items.filter((value) => value.selected).length;
  };

  getSelectedItemsSum = (): number => {
    return this.selectedType.items.reduce((sum, item) => {
      return sum + (item.selected ? item.value : 0);
    }, 0);
  };
}
