define(["dojo/_base/declare", "widgets/MapController", "dijit/Dialog", "dijit/form/CheckBox", "dgrid/Grid", "dgrid/editor"], function(declare, MapController, Dialog, CheckBox, Grid, editor) {

	return declare("widgets.MenuController", null, {
		/**
		 *地图控制器
		 */
		controller : new MapController(),
		/**
		 *地图
		 */
		map : null,
		/**
		 *获取地图
		 */
		getMap : function() {

			return this.map;
		},
		/**
		 *设置地图
		 */
		setMap : function(map) {
			this.map = map;
		},
		/**
		 * 图文介绍
		 */
		showGraphicIntroduction : function() {
			alert("图文介绍");
		},
		/**
		 * 视频介绍
		 */
		showVideoIntroduction : function() {
			alert("视频介绍");
		},
		/**
		 * 火炬园区
		 */
		showTorchPark : function() {
			var map = this.map.map;
			var url = this.map.url + "/0";
			var controller = this.controller;
			controller.setExtentByAttribute(map, url, "火炬高新园");
		},
		/**
		 * 翔安园区
		 */
		showXianganPark : function() {
			var map = this.map.map;
			var url = this.map.url + "/0";
			var controller = this.controller;
			controller.setExtentByAttribute(map, url, "翔安园");
		},
		/**
		 * 同集园区
		 */
		showTongjiPark : function() {
			var map = this.map.map;
			var url = this.map.url + "/0";
			var controller = this.controller;
			controller.setExtentByAttribute(map, url, "同集园");
		},
		/**
		 * 信息光电园
		 */
		showPhotoelectricPark : function() {
			var map = this.map.map;
			var url = this.map.url + "/0";
			var controller = this.controller;
			controller.setExtentByAttribute(map, url, "信息光电园");
		},
		/**
		 * 软件园一期
		 */
		showSoftwarePark : function() {
			var map = this.map.map;
			var url = this.map.url + "/0";
			var controller = this.controller;
			controller.setExtentByAttribute(map, url, "软件园");
		},
		/**
		 * 北大生物园
		 */
		showBiologicalPark : function() {
			var map = this.map.map;
			var url = this.map.url + "/0";
			var controller = this.controller;
			controller.setExtentByAttribute(map, url, "北大生物园");
		},
		/**
		 *图层管理对话框
		 */
		layerManageDialog : null,
		/**
		 * 图层管理
		 */
		layerManagement : function() {
			var dialog;
			if (this.layerManageDialog == null) {
				var map = this.map.map;
				for(var i in map.layerIds) {
					var layer = map.getLayer(map.layerIds[i]);
					
				}

				dialog = new Dialog({
					id : "layerdialog",
					title : "图层管理",
					//content : content,
					style : "width:400px;overflow: scroll;"
				});
				var data = [{
					head : true,
					first : "Bob",
					second : "trouble",
					third : "introuce"
				}, {
					head : true,
					first : "Bob",
					second : "trouble",
					third : "introuce"
				}, {
					head : true,
					first : "Bob",
					second : "trouble",
					third : "introuce"
				}];
				var grid = new Grid({
					columns : {
						head :editor({
							label: " ",
							editor : "checkbox"
						}),
						first : "name",
						second : "school",
						third : "age"
					}
				});
				grid.renderArray(data);
				dialog.addChild(grid);
				/*
				 var checkbox = new CheckBox({
				 id : "checkcheck",
				 label : "图层管理",
				 checked : true
				 });
				 console.log(checkbox);
				 checkbox.placeAt(dialog);*/
				this.layerManageDialog = dialog;
			} else {
				dialog = this.layerManageDialog;
			}
			//console.log(dialog);
			dialog.show();

			//var map = this.map.map;
			//console.log(map);
			//alert("图层管理");
		},
		/**
		 * 地图图例
		 */
		showMapLegend : function() {
			alert("地图图例");
		},
		/**
		 * 集成共享
		 */
		integrationShare : function() {
			alert("集成共享");
		},
		/**
		 * 清除选择
		 */
		clearSelection : function() {
			alert("清除选择");
		},
		/**
		 * 由表查图
		 */
		queryMapByChart : function() {
			alert("由表查图");
		},
		/**
		 * 地图查询
		 */
		queryMap : function() {
			alert("地图查询");
		},
		/**
		 * 地图标注
		 */
		labelMap : function() {
			alert("地图标注");
		},
		/**
		 * 导出地图
		 */
		exportMap : function() {
			alert("导出地图");
		},
		/**
		 * 已批农转用
		 */
		showAgricultureToUse : function() {
			alert("已批农转用");
		},
		/**
		 * 已批未供
		 */
		showUnSupply : function() {
			alert("已批未供");
		},
		/**
		 * 已批未建
		 */
		showUnConstruct : function() {
			alert("已批未建");
		},
		/**
		 * 已批达产
		 */
		showProduction : function() {
			alert("已批达产");
		},
		/**
		 * 清除
		 */
		clear : function() {
			alert("清除");
		},
		/**
		 * 设定评价范围
		 */
		setEvaluateScope : function() {
			alert("设定评价范围");
		},
		/**
		 * 设置理想值
		 */
		setIdealValue : function() {
			alert("设置理想值");
		},
		/**
		 * 计算现状值
		 */
		computeCurrentValue : function() {
			alert("计算现状值");
		},
		/**
		 * 设置权重值
		 */
		setWeightValue : function() {
			alert("设置权重值");
		},
		/**
		 * 计算评价结果
		 */
		computeEvaluateResult : function() {
			alert("计算评价结果");
		},
		/**
		 * 主要指标对比
		 */
		showMajorIndexComparison : function() {
			alert("主要指标对比");
		},
		/**
		 * 评价结果对比
		 */
		showEvaluateResultComparison : function() {
			alert("评价结果对比");
		},
		/**
		 * 企业经济统计
		 */
		showEnterpriseEconomicStatistics : function() {
			alert("企业经济统计");
		},
		/**
		 * 企业用地效益
		 */
		showEnterpriseLandUseEffiency : function() {
			alert("企业用地效益");
		},
		/**
		 * 经济指标排名
		 */
		showEconomicIndicatorRank : function() {
			alert("经济指标排名");
		},
		/**
		 * 新建案例
		 */
		createCase : function() {
			alert("新建案例");
		},
		/**
		 * 案例管理
		 */
		caseManagement : function() {
			alert("案例管理");
		},
		/**
		 * 设置工作案例
		 */
		setWorkCase : function() {
			alert("设置工作案例");
		},
		/**
		 * 编辑更新
		 */
		editUpdate : function() {
			alert("编辑更新");
		},
		/**
		 * 用户管理
		 */
		userManagement : function() {
			alert("用户管理");
		},
		/**
		 * 修改密码
		 */
		modifyPassword : function() {
			alert("用户管理");
		}
	});
});
