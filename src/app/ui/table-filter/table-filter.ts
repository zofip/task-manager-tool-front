import { NgModule, Component, Inject, OnInit, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
    selector: 'app-table-filter',
    templateUrl: './table-filter.html'
})
export class TableFilterComponent implements OnInit {

    @Input() columsSource: any;
    @Input() data: object[];
    @Input() titleTable: string;

    displayedColumns: string[];
    dataSource: MatTableDataSource<object>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor() {
        this.displayedColumns = this.columsSource.map(colum => colum.filterColumn);
        this.dataSource = new MatTableDataSource(this.data);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}


@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule
    ],
    entryComponents: [TableFilterComponent],
    declarations: [TableFilterComponent]
})
export class TableFilterModule { }
