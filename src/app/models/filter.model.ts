import { FilterInput } from "./filter-input.model";
export interface Filter {
    inputs: FilterInput[];
    onSubmit: (...params: any[]) => void;
}