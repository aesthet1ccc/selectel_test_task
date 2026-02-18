export interface MenuData {
  id: string;
  title: string;
  items: MenuItem[];
}

export type MenuItem = {
  id: string;
  label: string;
  value: number;
  selected: boolean;
};

export const menuData: MenuData[] = [
  {
    id: '1',
    title: 'Тип 1',
    items: [
      { id: 't1i1', label: 'Item 1', value: 20, selected: false },
      { id: 't1i2', label: 'Item 2', value: 30, selected: false },
      { id: 't1i3', label: 'Item 3', value: 40, selected: false },
      { id: 't1i4', label: 'Item 4', value: 50, selected: false },
    ],
  },
  {
    id: '2',
    title: 'Тип 2',
    items: [
      { id: 't2i1', label: 'item 1', value: 33, selected: false },
      { id: 't2i2', label: 'item 2', value: 21, selected: false },
      { id: 't2i3', label: 'item 3', value: 15, selected: false },
      { id: 't2i4', label: 'item 4', value: 10, selected: false },
    ],
  },
];
