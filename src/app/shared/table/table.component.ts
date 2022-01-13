import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { debounce } from "@core/decorators/debounce"
import { IconDefinition} from "@fortawesome/fontawesome-svg-core"

/** Définition des colonnes du tableau */
export class ColumnOptions<T> {
  name!: keyof(T);
  displayName?: string;
  render?: (data: T) => string;
}

export enum ColumnButtonActionType {
  button,
  icon
}

/** Actions des boutons (pour colonne action) */
export class ColumnButtonAction<T> {
  title!: string;
  classes!: string [];
  actionType!: T;
  type!: ColumnButtonActionType;
  iconDefinition!: IconDefinition;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // class html de la table
  @Input() ClassTable!: string[];

  // columns shows
  @Input() Columns: ColumnOptions<any>[] | null = null;

  // columns shows
  @Input() ActionsColumn: ColumnButtonAction<any>[] | null = null;

  // data
  @Input() Data!: any[];

  // total
  @Input() Total!: number;

  // page
  @Input() Page!: number;

  @Input() Take!: number;

  // when page change
  @Output() OnPageChange: EventEmitter<number> = new EventEmitter<number>();

  // when column order change
  @Output() OnOrderChange: EventEmitter<number> = new EventEmitter<number>();

  // when column order change
  @Output() OnClickActionType: EventEmitter<any> = new EventEmitter<any>();

  searchText: string = "";

  columnButtonActionType = ColumnButtonActionType;

  constructor() {
  }


  ngOnInit(): void {
  }

  pageChange(page: number): void {
    this.OnPageChange.emit((page-1)*this.Take);
  }

  clickActionType(item: any, actionType: any): void {
    this.OnClickActionType.emit({ target: item, actionType});
  }

}
