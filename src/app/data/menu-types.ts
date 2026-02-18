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
