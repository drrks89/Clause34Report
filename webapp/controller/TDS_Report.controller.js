sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("com.tdsrep.tdsexpensereport.controller.TDS_Report", {
        onInit: function () {
            var oSmartTable = this.byId("smartTable");
            if (oSmartTable) {
                oSmartTable.attachBeforeRebindTable(this._onBeforeRebindTable, this);
            }
        },

        _onBeforeRebindTable: function (oEvent) {
            var oBindingParams = oEvent.getParameter("bindingParams");
            if (!oBindingParams.parameters) {
                oBindingParams.parameters = {};
            }
            oBindingParams.parameters["$top"] = 50;
        },
      
        onSmartTableInit: function () {
            var oTable = this.byId("smartTable").getTable();

            if (oTable.setFixedLayout) {
                oTable.setFixedLayout(true);
            }

            var aCols = oTable.getColumns();

            if (aCols[0]) aCols[0].setWidth("10rem"); // CompanyCode
            if (aCols[2]) aCols[2].setWidth("8rem"); // FiscalYear
            if (aCols[5]) aCols[5].setWidth("12rem"); // AmountLC
            if (aCols[6]) aCols[6].setWidth("9rem"); // DocumentType
            if (aCols[9]) aCols[9].setWidth("9rem"); // BusinessArea
            if (aCols[10]) aCols[10].setWidth("14rem"); // Reference
            if (aCols[11]) aCols[11].setWidth("12rem"); // Assignement
            if (aCols[14]) aCols[14].setWidth("13rem"); // ReferenceKey3
            if (aCols[17]) aCols[17].setWidth("10rem"); // InvoiceYear
            if (aCols[19]) aCols[19].setWidth("16rem"); // SupplierName
            if (aCols[20]) aCols[20].setWidth("15rem"); // WT_BAseAmount
            if (aCols[21]) aCols[21].setWidth("13rem"); // WithholdingTax
            if (aCols[22]) aCols[22].setWidth("10rem"); // WT_TAXType
            if (aCols[23]) aCols[23].setWidth("10rem"); // WT_Taxcode
        }

    });
});