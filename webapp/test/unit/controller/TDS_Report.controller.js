/*global QUnit*/

sap.ui.define([
	"com/tdsrep/tdsexpensereport/controller/TDS_Report.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TDS_Report Controller");

	QUnit.test("I should test the TDS_Report controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
