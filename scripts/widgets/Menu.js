define(["dojo/_base/declare", "dijit/Menu", "dijit/MenuBar", "dijit/MenuItem", "dijit/MenuBarItem", "dijit/PopupMenuItem", "dijit/PopupMenuBarItem", "dijit/Dialog","esri/tasks/QueryTask"], function(declare) {

	return declare("widgets.Menu", null, {
		// 菜单DOM文档ID
		id : null,
		// ESRI地图对象
		map : null,
		// 一级主菜单
		mainMenu : null,
		// 二级菜单
		// 园区信息菜单
		parkInfoMenu : null,
		// 地图操作菜单
		mapOptMenu : null,
		// 园区导览菜单
		landManageMenu : null,
		// 土地信息菜单
		landInfoMenu : null,
		// 土地评价菜单
		landEvalMenu : null,
		// 统计分析菜单
		statAnalysisMenu : null,
		// 动态更新菜单
		dynamicUpdateMenu : null,
		// 用户管理菜单
		userManageMenu : null,
		// 园区导览菜单三级子菜单
		parkGuideMenu : null,
		// 图文介绍
		showGraphicIntroduction : function() {
			var dialog = new dijit.Dialog({
				title : "The Dojo Toolkit",
				content : "This is the Dialog content",
				style : "width : 200px;display:none;"
			});
			dialog.show();
			//alert("图文介绍");
		},
		// 视频介绍
		showVideoIntroduction : function() {
			alert("视频介绍");
		},
		// 火炬园区
		showTorchPark : function() {
			var map = this.map.map;
			var url = this.map.url + "/7";
			var task = new esri.tasks.QueryTask(url);
			var query = new esri.tasks.Query();
			query.where = "YQMC = '火炬高新园'";
			query.outFields = ["*"];
			query.returnGeometry = true;
			task.execute(query, function(featureSet) {
				var graphics = featureSet.features;
				if (graphics.length == 1) {
					var extent = graphics[0].geometry.getExtent();
					map.setExtent(extent);
				} else {
					alert("地图查询失败");
				}
			});
		},
		// 翔安园区
		showXianganPark : function() {
			alert("翔安园区");
		},
		// 同集园区
		showTongjiPark : function() {
			alert("同集园区");
		},
		// 信息光电园
		showPhotoelectricPark : function() {
			alert("信息光电园");
		},
		// 软件园一期
		showSoftwarePark : function() {
			alert("软件园一期");
		},
		// 北大生物园
		showBiologicalPark : function() {
			alert("北大生物园");
		},
		// 图层管理
		layerManagement : function() {
			alert("图层管理");
		},
		// 地图图例
		showMapLegend : function() {
			alert("地图图例");
		},
		// 集成共享
		integrationShare : function() {
			alert("集成共享");
		},
		// 清除选择
		clearSelection : function() {
			alert("清除选择");
		},
		// 由表查图
		queryMapByChart : function() {
			alert("由表查图");
		},
		// 地图查询
		queryMap : function() {
			alert("地图查询");
		},
		// 地图标注
		labelMap : function() {
			alert("地图标注");
		},
		// 导出地图
		exportMap : function() {
			alert("导出地图");
		},
		// 已批农转用
		showAgricultureToUse : function() {
			alert("已批农转用");
		},
		// 已批未供
		showUnSupply : function() {
			alert("已批未供");
		},
		// 已批未建
		showUnConstruct : function() {
			alert("已批未建");
		},
		// 已批达产
		showProduction : function() {
			alert("已批达产");
		},
		// 清除
		clear : function() {
			alert("清除");
		},
		// 设定评价范围
		setEvaluateScope : function() {
			alert("设定评价范围");
		},
		// 设置理想值
		setIdealValue : function() {
			alert("设置理想值");
		},
		// 计算现状值
		computeCurrentValue : function() {
			alert("计算现状值");
		},
		// 设置权重值
		setWeightValue : function() {
			alert("设置权重值");
		},
		// 计算评价结果
		computeEvaluateResult : function() {
			alert("计算评价结果");
		},
		// 主要指标对比
		showMajorIndexComparison : function() {
			alert("主要指标对比");
		},
		// 评价结果对比
		showEvaluateResultComparison : function() {
			alert("评价结果对比");
		},
		// 企业经济统计
		showEnterpriseEconomicStatistics : function() {
			alert("企业经济统计");
		},
		// 企业用地效益
		showEnterpriseLandUseEffiency : function() {
			alert("企业用地效益");
		},
		// 经济指标排名
		showEconomicIndicatorRank : function() {
			alert("经济指标排名");
		},
		// 新建案例
		createCase : function() {
			alert("新建案例");
		},
		// 案例管理
		caseManagement : function() {
			alert("案例管理");
		},
		// 设置工作案例
		setWorkCase : function() {
			alert("设置工作案例");
		},
		// 编辑更新
		editUpdate : function() {
			alert("编辑更新");
		},
		// 用户管理
		userManagement : function() {
			alert("用户管理");
		},
		// 修改密码
		modifyPassword : function() {
			alert("用户管理");
		},
		// 构造函数
		constructor : function(id, map) {
			this.id = id;
			this.map = map;
			this.load();
		},
		// 加载菜单
		load : function() {
			this.create();
			this.startup();
		},
		// 检查参数
		check : function() {
			var retValue = false;
			if (this.id == null) {
				console.log("this.id == null");
				return retValue;
			}
			if (this.mainMenu == null) {
				console.log("this.mainMenu == null");
				return retValue;
			}
			if (this.parkInfoMenu == null) {
				console.log("this.parkInfoMenu == null");
				return retValue;
			}
			if (this.mapOptMenu == null) {
				console.log("this.mapOptMenu == null");
				return retValue;
			}
			if (this.landManageMenu == null) {
				console.log("this.landManageMenu == null");
				return retValue;
			}
			if (this.landInfoMenu == null) {
				console.log("this.landInfoMenu == null");
				return retValue;
			}
			if (this.landEvalMenu == null) {
				console.log("this.landEvalMenu == null");
				return retValue;
			}
			if (this.statAnalysisMenu == null) {
				console.log("this.statAnalysisMenu == null");
				return retValue;
			}
			if (this.dynamicUpdateMenu == null) {
				console.log("this.dynamicUpdateMenu == null");
				return retValue;
			}
			if (this.userManageMenu == null) {
				console.log("this.userManageMenu == null");
				return retValue;
			}
			if (this.parkGuideMenu == null) {
				console.log("this.parkGuideMenu == null");
				return retValue;
			}
			retValue = true;

			return retValue;
		},
		// 创建菜单
		create : function() {
			this.parkGuideMenu = this.createParkGuideMenu();
			this.parkInfoMenu = this.createParkInfoMenu();
			this.mapOptMenu = this.createMapOptMenu();
			this.landManageMenu = this.createLandManageMenu();
			this.landInfoMenu = this.createLandInfoMenu();
			this.landEvalMenu = this.createLandEvalMenu();
			this.statAnalysisMenu = this.createStatAnalysisMenu();
			this.dynamicUpdateMenu = this.createDynamicUpdateMenu();
			this.userManageMenu = this.createUserManageMenu();
			this.mainMenu = this.createMainMenu();
		},
		// 启动菜单
		startup : function() {
			// 检查参数
			this.mainMenu.startup();
			this.parkInfoMenu.startup();
			this.mapOptMenu.startup();
			this.landManageMenu.startup();
			this.landInfoMenu.startup();
			this.landEvalMenu.startup();
			this.statAnalysisMenu.startup();
			this.dynamicUpdateMenu.startup();
			this.userManageMenu.startup();
			this.parkGuideMenu.startup();
		},
		// 创建主菜单栏
		createMainMenu : function() {
			var menu = new dijit.MenuBar({}, this.id);

			var items = [{
				id : "parkinfo",
				label : "园区信息",
				popup : this.parkInfoMenu
			}, {
				id : "mapopt",
				label : "地图操作",
				popup : this.mapOptMenu
			}, {
				id : "landmanage",
				label : "用地管理",
				popup : this.landManageMenu
			}, {
				id : "landinfo",
				label : "土地信息",
				popup : this.landInfoMenu
			}, {
				id : "landeval",
				label : "土地评价",
				popup : this.landEvalMenu
			}, {
				id : "anlysis",
				label : "统计分析",
				popup : this.statAnalysisMenu
			}, {
				id : "update",
				label : "动态更新",
				popup : this.dynamicUpdateMenu
			}, {
				id : "usermanage",
				label : "用户管理",
				popup : this.userManageMenu
			}];

			for (var i in items) {
				var menuItem = new dijit.PopupMenuBarItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		// 创建园区信息菜单
		createParkInfoMenu : function() {
			var menu = new dijit.Menu();
			var showGraphicIntroduction = this.showGraphicIntroduction;
			var items = [{
				id : "graphicintr",
				label : "图文介绍",
				onClick : function(event) {
					showGraphicIntroduction();
				}
			}, {
				id : "videointr",
				label : "视频介绍",
				onClick : this.showVideoIntroduction
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			var parkGuideItem = {
				id : "parkguide",
				label : "园区导览",
				popup : this.parkGuideMenu
			};
			var parkGuideMenuItem = new dijit.MenuItem(parkGuideItem);
			menu.addChild(parkGuideMenuItem);

			return menu;
		},
		// 创建园区导览菜单
		createParkGuideMenu : function() {
			var showTorchPark = this.showTorchPark;
			var menu = new dijit.Menu();
			var items = [{
				id : "torchpark",
				label : "火炬园区",
				onClick : function(event) {
					showTorchPark();
				}
			}, {
				id : "xianganpark",
				label : "翔安园区",
				onClick : this.showXianganPark
			}, {
				id : "tongjipark",
				label : "同集园区",
				onClick : this.showTongjiPark
			}, {
				id : "photoelectricpark",
				label : "信息光电园",
				onClick : this.showPhotoelectricPark
			}, {
				id : "softwarepark",
				label : "软件园一期",
				onClick : this.showSoftwarePark
			}, {
				id : "biologicalpark",
				label : "北大生物园",
				onClick : this.showBiologicalPark
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		// 创建地图操作菜单
		createMapOptMenu : function() {
			var menu = new dijit.Menu();
			var items = [{
				id : "layermanage",
				label : "图层管理",
				onClick : this.layerManagement
			}, {
				id : "maplegend",
				label : "地图图例",
				onClick : this.showMapLegend
			}, {
				id : "integrate",
				label : "集成共享",
				onClick : this.integrationShare
			}, {
				id : "clearselect",
				label : "清除选择",
				onClick : this.clearSelection
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		// 创建用地管理菜单
		createLandManageMenu : function() {
			var menu = new dijit.Menu();
			var items = [{
				id : "querybychart",
				label : "由表查图",
				onClick : this.queryMapByChart
			}, {
				id : "querymap",
				label : "地图查询",
				onClick : this.queryMap
			}, {
				id : "labelmap",
				label : "地图标注",
				onClick : this.labelMap
			}, {
				id : "exportmap",
				label : "导出地图",
				onClick : this.exportMap
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		// 创建土地信息菜单
		createLandInfoMenu : function() {
			var menu = new dijit.Menu();
			var items = [{
				id : "agriculture",
				label : "已批农转用",
				onClick : this.showAgricultureToUse
			}, {
				id : "supply",
				label : "已批未供",
				onClick : this.showUnSupply
			}, {
				id : "construct",
				label : "已批未建",
				onClick : this.showUnConstruct
			}, {
				id : "product",
				label : "已批达产",
				onClick : this.showProduction
			}, {
				id : "clear",
				label : "清除",
				onClick : this.clear
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		// 创建土地评价菜单
		createLandEvalMenu : function() {
			var menu = new dijit.Menu();
			var items = [{
				id : "setscope",
				label : "设定评价范围",
				onClick : this.setEvaluateScope
			}, {
				id : "setideal",
				label : "设置理想值",
				onClick : this.setIdealValue
			}, {
				id : "current",
				label : "计算现状值",
				onClick : this.computeCurrentValue
			}, {
				id : "setweight",
				label : "设置权重值",
				onClick : this.setWeightValue
			}, {
				id : "evaluate",
				label : "计算评价结果",
				onClick : this.computeEvaluateResult
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		// 创建统计分析菜单
		createStatAnalysisMenu : function() {
			var menu = new dijit.Menu();
			var items = [{
				id : "indexcompare",
				label : "主要指标对比",
				onClick : this.showMajorIndexComparison
			}, {
				id : "evalcompare",
				label : "评价结果对比",
				onClick : this.showEvaluateResultComparison
			}, {
				id : "economicstat",
				label : "企业经济统计",
				onClick : this.showEnterpriseEconomicStatistics
			}, {
				id : "landeffiency",
				label : "企业用地效益",
				onClick : this.showEnterpriseLandUseEffiency
			}, {
				id : "indicatorrank",
				label : "经济指标排名",
				onClick : this.showEconomicIndicatorRank
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		// 创建动态更新菜单
		createDynamicUpdateMenu : function() {
			var menu = new dijit.Menu();
			var items = [{
				id : "newcase",
				label : "新建案例",
				onClick : this.createCase
			}, {
				id : "casemanage",
				label : "案例管理",
				onClick : this.caseManagement
			}, {
				id : "setcase",
				label : "设置工作案例",
				onClick : this.setWorkCase
			}, {
				id : "editupdate",
				label : "编辑更新",
				onClick : this.editUpdate
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		// 创建用户管理菜单
		createUserManageMenu : function() {
			var menu = new dijit.Menu();
			var items = [{
				id : "humanmanage",
				label : "用户管理",
				onClick : this.userManagement
			}, {
				id : "modifypassword",
				label : "修改密码",
				onClick : this.modifyPassword
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		}
	});
});
