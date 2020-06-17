sap.ui.define([
	"template/cf/mbd/tmp1/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("template.cf.mbd.tmp1.controller.info.Information", {
		onInit: function(){
			var oJSONModel = new JSONModel();
			this.getView().setModel(oJSONModel);
			this._loadInfoData();
		},

		_loadInfoData: function(){
			this.getView().getModel().loadData("/api/info");
		}
	});
});