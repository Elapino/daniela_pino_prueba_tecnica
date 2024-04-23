export interface TableAction {
  icon: string;
  tooltip: string;
  color: string;
  onClick: (params: any) => void;
  canShow?: (params: any) => boolean;
}