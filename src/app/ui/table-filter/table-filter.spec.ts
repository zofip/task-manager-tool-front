import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TableFilterComponent } from "./table-filter";
import { setupProjects } from "src/app/__test__/setup-test-data-projects";
import { By } from "@angular/platform-browser";


describe('Table Filter', () => {

    let component: TableFilterComponent;
    let fixture: ComponentFixture<TableFilterComponent>;
    let el: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                MatTableModule,
                MatFormFieldModule,
                MatInputModule,
                MatPaginatorModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableFilterComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
    });

    beforeEach(() => {
        const columnsSource: any = [
            { filterColumn: 'code', nameColumn: 'Code' },
            { filterColumn: 'name', nameColumn: 'Name' }
        ];
        const projects = setupProjects();

        component.columnsSource = columnsSource;
        component.data = projects;

        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display number of rows', () => {
        const rows = el.queryAll(By.css('.mat-row'));
        expect(rows).toBeTruthy("Could not find rows");
        expect(rows.length).toBe(2, "Unexpected number of rows");
    });

    it('should display number of columns', () => {
        const columnCode = el.query(By.css('.mat-column-code'));
        const columnName = el.query(By.css('.mat-column-name'));
        expect(columnCode).toBeTruthy("Could not find column code");
        expect(columnName).toBeTruthy("Could not find column name");
    });

    fit('should display filter search field', () => {
        const inputFilter = el.query(By.css('input'));
        inputFilter.triggerEventHandler('keyup', {target:{value: 'Nels'}});
        fixture.detectChanges();
        
        const rowFiltered = el.queryAll(By.css('.mat-row'));
        expect(rowFiltered.length).toBe(1);
        expect(rowFiltered[0].nativeElement.textContent).toEqual('1Angular Nels');
    });

});