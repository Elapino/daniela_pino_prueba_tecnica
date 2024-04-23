import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { Constants } from '../../../utils/constants';
import { Table } from '../../../models/table.model';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-shared-table',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './shared-table.component.html',
})
export class SharedTableComponent implements OnInit, AfterViewInit {
  @Input() config!: Table;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  pageSize: number = Constants.pageSizeOptions[0];
  pageSizeOptions: number[] = Constants.pageSizeOptions;
  pageNumber: number = 0;
  total: number = 0;

  selection = new SelectionModel<any>(true, []);
  selectedAll: boolean = false;


  constructor(
    public _matDialog: MatDialog,
    public _MatpaginatorIntl: MatPaginatorIntl,
  ) { }


  ngAfterViewInit(): void {
    if (!this.config.notPaginator) {
      if (this.paginator) {
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
      }
    }
  }

  ngOnInit(): void {
    this._MatpaginatorIntl.itemsPerPageLabel = 'Registros por pág'
    this.pageNumber = 0;
    this.displayedColumns = this.config.fields.filter(field => !field.hidden).map(field => field.title);

    if (this.config.selectable) {
      this.displayedColumns.unshift('select');
    }
    if (this.config.actions) {
      this.displayedColumns.push('actions');
    }
    this.getData();
  }


  /* Table filling methods */
  getData(): void {
    if (this.config?.getData) {
      this.config.getData()?.subscribe({
        next: (data: any) => {
          if (this.config && this.config.lazy) {
            if (data.reset) {
              this.clearSelectionAndReloadData();
            }
            this.dataSource = new MatTableDataSource(data.content);
            this.total = data.totalElements;
          } else {
            this.clearSelectionAndReloadData();
            this.dataSource = new MatTableDataSource(data);
            this.total = data.length;
            if (!this.config?.notPaginator) {
              this.dataSource.paginator = this.paginator;
            }
          }
        }
      });
    }
  }


  loadPage(event: any): void {
    if (this.pageNumber !== event.pageIndex) {
      this.pageNumber = event.pageIndex;
    }
    if (this.pageSize != event.pageSize) {
      this.pageSize = event.pageSize;
    }
    if (this.config.onChange) {
      this.config.onChange({ pageNumber: this.pageNumber, pageSize: this.pageSize })
    }
  }


  /* Select / Deselect all records */
  masterToggle() {
    for (const element of this.dataSource.data) {
      if (!this.selectedAll) {
        this.selection.select(element);
      } else {
        this.selection.deselect(element);
      }
    }
    this.selectedAll = !this.selectedAll;
  }

  selectRow(element: any) {
    this.selectedAll = false;
    this.selection.toggle(element);
  }

  clearSelectionAndReloadData(): void {
    this.selection.clear();
    if (!this.config.notPaginator) {

      this.paginator.pageIndex = 0;
    }
    this.selectedAll = false;
  }

  isSelected(element: any): boolean {
    return this.selection.selected.findIndex(e1 => {
      return JSON.stringify(e1) == JSON.stringify(element)
    }) != -1
  }
}