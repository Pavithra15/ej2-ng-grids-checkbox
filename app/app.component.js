"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = [{ OrderID: 10248, CustomerID: 'VINET', Active: false },
            { OrderID: 10249, CustomerID: 'TOMSP', Active: true },
            { OrderID: 10250, CustomerID: 'HANAR', Active: false }];
        this.edit = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', showConfirmDialog: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Cencel', 'Update'];
    };
    AppComponent.prototype.recordClick = function (e) {
        if (e.target.classList.contains('e-rowcell')) {
            var cell = ej2_base_1.closest(e.target, 'td');
            var tr = ej2_base_1.closest(cell, '.e-row');
            if (tr) {
                var val = tr.getAttribute('aria-selected') ? false : true;
                var rowIndex = parseInt(cell.parentElement.getAttribute('aria-rowindex'), 10);
                this.grid.editModule.updateCell(rowIndex, 'Active', val);
                this.grid.editModule.batchSave();
                var btn = document.querySelector('#gridEditConfirm').children[1].children[0];
                btn.click();
            }
        }
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('grid'),
    __metadata("design:type", ej2_ng_grids_1.GridComponent)
], AppComponent.prototype, "grid", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<ejs-grid #grid [dataSource]='data' [toolbar]='toolbar' id='grid' (click)='recordClick($event)' [editSettings]='edit' allowPaging=true allowSelection=true>\n                  <e-columns>\n                  <e-column field='OrderID' headerText='ID' isPrimaryKey=true width='120' textAlign='Right'></e-column>\n                  <e-column field='CustomerID' headerText='Name' width='160'></e-column>\n                   <e-column field='Active' headerText='' type='checkbox' width='160'></e-column>\n                  </e-columns>\n                </ejs-grid>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
