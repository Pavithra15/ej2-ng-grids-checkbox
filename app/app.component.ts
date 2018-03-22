import { Component, ViewChild, OnInit } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { GridComponent } from '@syncfusion/ej2-ng-grids';
import { orderData } from './data';

@Component({
    selector: 'my-app',
    template: `<ejs-grid #grid [dataSource]='data' [toolbar]='toolbar' id='grid' (click)='recordClick($event)' [editSettings]='edit' allowPaging=true>
                  <e-columns>
                  <e-column field='OrderID' headerText='ID' isPrimaryKey=true width='120' textAlign='Right'></e-column>
                  <e-column field='CustomerID' headerText='Name' width='160'></e-column>
                   <e-column field='Active' headerText='' type='checkbox' width='160'></e-column>
                  </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public edit: Object;
    public toolbar: string[];

    @ViewChild('grid')
    public grid: GridComponent;
    ngOnInit(): void {
        this.data = [{ OrderID: 10248, CustomerID: 'VINET', Active: false },
        { OrderID: 10249, CustomerID: 'TOMSP', Active: true },
        { OrderID: 10250, CustomerID: 'HANAR', Active: false }];
        this.edit = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', showConfirmDialog: false };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Cencel', 'Update'];
    }
    recordClick(e: any) {
        if (e.target.classList.contains('e-rowcell') || e.target.offsetParent.classList.contains('e-rowcell')) {
            let args: any = this.grid.getRowInfo(e.target);
            let tr = args.row;
            let val: boolean = !isNullOrUndefined(tr.attributes['aria-selected']) && tr.attributes['aria-selected'].value ? false : true;
            let rowIndex: number = args.rowIndex;
            this.grid.editModule.updateCell(rowIndex, 'Active', val);
            this.grid.editModule.batchSave();
        }
    }
}
