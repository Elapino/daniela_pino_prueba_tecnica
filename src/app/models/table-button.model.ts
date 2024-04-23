export interface TableButton {
  position?: 
    | 'up'
    | 'down'
  title: string;
  class?: string;
  icon?: string;
  onClick?: (params: any) => void;
}