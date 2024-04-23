import { Observable } from "rxjs";

export interface FilterInput {
  label: string;
  size: number;
  formControlName: string;
  type:
  | 'select'
  | 'numberInput'
  | 'alphanumericInput'
  | 'textInput'
  | 'input'
  | 'date'
  | 'yearMonthPicker'
  | 'rangePicker';
  maxDate?: Date;
  getData?: Observable<any>;
  itemToShow?: string;
  idToShow?: string;
  onChange?: (value: any) => void;
}