import { Observable } from "rxjs";
import { TableAction } from "./table-action.model";
import { TableButton } from "./table-button.model";
import { TableField } from "./table-field.model";

export interface Table {
  selectable?: boolean;
  title: string;
  buttons?: TableButton[];
  fields: TableField[];
  actions?: TableAction[];
  actionsSize?: string;
  lazy?: boolean;
  onChange?: (...params: any[]) => void; 
  getData?: () => Observable<any>;
  notPaginator?: boolean;
}
