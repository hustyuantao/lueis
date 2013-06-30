define(["dojo/_base/declare", "dijit/Menu", "dijit/MenuBar", "dijit/MenuItem", "dijit/MenuBarItem", "dijit/PopupMenuItem", "dijit/PopupMenuBarItem", "widgets/MenuController"], function(declare, Menu, MenuBar, MenuItem, MenuBarItem, PopupMenuItem, PopupMenuBarItem, MenuController) {

	return declare("widgets.Menu", null, {
		/**
		 * 菜单DOM文档ID
		 */
		divId : null,
		/**
		 *获取 菜单DOM文档ID
		 */
		getId : function() {

			return this.divId;
		},
		/**
		 *设置菜单DOM文档ID
		 */
		setId : function(id) {
			this.divId = id;
		},
		/**
		 * 地图
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
		setMap : function() {
			this.map = map;
		},
		/**
		 * 一级主菜单
		 */
		mainMenu : null,
		/**
		 * 二级菜单
		 * 园区信息菜单
		 */
		parkInfoMenu : null,
		/**
		 * 二级菜单
		 * 地图操作菜单
		 */
		mapOptMenu : null,
		/**
		 * 二级菜单
		 * 园区导览菜单
		 */
		landManageMenu : null,
		/**
		 * 二级菜单
		 * 土地信息菜单
		 */
		landInfoMenu : null,
		/**
		 * 二级菜单
		 * 土地评价菜单
		 */
		landEvalMenu : null,
		/**
		 * 二级菜单
		 * 统计分析菜单
		 */
		statAnalysisMenu : null,
		/**
		 * 二级菜单
		 * 动态更新菜单
		 */
		dynamicUpdateMenu : null,
		/**
		 * 二级菜单
		 * 用户管理菜单
		 */
		userManageMenu : null,
		/**
		 * 三级菜单
		 * 园区导览菜单
		 */
		parkGuideMenu : null,
		/**
		 * 菜单控制器
		 */
		controller : new MenuController(),
		/**
		 * 构造函数
		 */
		constructor : function(id, map) {
			if (arguments.length == 2) {
				this.divId = id;
				this.map = map;
				this.load();
			}
		},
		/**
		 * 加载菜单
		 */
		load : function() {
			var map = this.map;
			this.controller.setMap(map);
			this.create();
			this.startup();
		},
		/**
		 * 创建菜单
		 */
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
		/**
		 * 启动菜单
		 */
		startup : function() {
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
		/**
		 * 创建主菜单栏
		 */
		createMainMenu : function() {
			var id = this.divId;
			var parkInfoMenu = this.parkInfoMenu;
			var mapOptMenu = this.mapOptMenu;
			var landManageMenu = this.landManageMenu;
			var landInfoMenu = this.landInfoMenu;
			var landEvalMenu = this.landEvalMenu;
			var statAnalysisMenu = this.statAnalysisMenu;
			var dynamicUpdateMenu = this.dynamicUpdateMenu;
			var userManageMenu = this.userManageMenu;

			var menu = new MenuBar({}, id);

			var items = [{
				id : "parkinfo",
				label : "园区信息",
				popup : parkInfoMenu
			}, {
				id : "mapopt",
				label : "地图操作",
				popup : mapOptMenu
			}, {
				id : "landmanage",
				label : "用地管理",
				popup : landManageMenu
			}, {
				id : "landinfo",
				label : "土地信息",
				popup : landInfoMenu
			}, {
				id : "landeval",
				label : "土地评价",
				popup : landEvalMenu
			}, {
				id : "anlysis",
				label : "统计分析",
				popup : statAnalysisMenu
			}, {
				id : "update",
				label : "动态更新",
				popup : dynamicUpdateMenu
			}, {
				id : "usermanage",
				label : "用户管理",
				popup : userManageMenu
			}];

			for (var i in items) {
				var menuItem = new PopupMenuBarItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		/**
		 * 创建园区信息菜单
		 */
		createParkInfoMenu : function() {
			var controller = this.controller;
			var parkGuideMenu = this.parkGuideMenu;
			var menu = new Menu();
			var items = [{
				id : "graphicintr",
				label : "图文介绍",
				onClick : function(event) {
					controller.showGraphicIntroduction();
				}
			}, {
				id : "videointr",
				label : "视频介绍",
				onClick : function(event) {
					controller.showVideoIntroduction();
				}
			}];
			for (var i in items) {
				var menuItem = new MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			var parkGuideItem = {
				id : "parkguide",
				label : "园区导览",
				popup : parkGuideMenu
			};
			var parkGuideMenuItem = new MenuItem(parkGuideItem);
			menu.addChild(parkGuideMenuItem);

			return menu;
		},
		/**
		 * 创建园区导览菜单
		 */
		createParkGuideMenu : function() {
			var controller = this.controller;
			var menu = new Menu();
			var items = [{
				id : "torchpark",
				label : "火炬园区",
				onClick : function(event) {
					controller.showTorchPark();
				}
			}, {
				id : "xianganpark",
				label : "翔安园区",
				onClick : function(event) {
					controller.showXianganPark();
				}
			}, {
				id : "tongjipark",
				label : "同集园区",
				onClick : function(event) {
					controller.showTongjiPark();
				}
			}, {
				id : "photoelectricpark",
				label : "信息光电园",
				onClick : function(event) {
					controller.showPhotoelectricPark();
				}
			}, {
				id : "softwarepark",
				label : "软件园一期",
				onClick : function(event) {
					controller.showSoftwarePark();
				}
			}, {
				id : "biologicalpark",
				label : "北大生物园",
				onClick : function(event) {
					controller.showBiologicalPark();
				}
			}];
			for (var i in items) {
				var menuItem = new MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		/**
		 * 创建地图操作菜单
		 */
		createMapOptMenu : function() {
			var controller = this.controller;
			var menu = new Menu();
			var items = [{
				id : "layermanage",
				label : "图层管理",
				onClick : function(event) {
					controller.layerManagement();
				}
			}, {
				id : "maplegend",
				label : "地图图例",
				onClick : function(event) {
					controller.showMapLegend();
				}
			}, {
				id : "integrate",
				label : "集成共享",
				onClick : function(event) {
					controller.integrationShare();
				}
			}, {
				id : "clearselect",
				label : "清除选择",
				onClick : function(event) {
					controller.clearSelection();
				}
			}];
			for (var i in items) {
				var menuItem = new MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		/**
		 * 创建用地管理菜单
		 */
		createLandManageMenu : function() {
			var controller = this.controller;
			var menu = new Menu();
			var items = [{
				id : "querybychart",
				label : "由表查图",
				onClick : function(event) {
					controller.queryMapByChart();
				}
			}, {
				id : "querymap",
				label : "地图查询",
				onClick : function(event) {
					controller.queryMap();
				}
			}, {
				id : "labelmap",
				label : "地图标注",
				onClick : function(event) {
					controller.labelMap();
				}
			}, {
				id : "exportmap",
				label : "导出地图",
				onClick : function(event) {
					controller.exportMap();
				}
			}];
			for (var i in items) {
				var menuItem = new MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		/**
		 * 创建土地信息菜单
		 */
		createLandInfoMenu : function() {
			var controller = this.controller;
			var menu = new Menu();
			var items = [{
				id : "agriculture",
				label : "已批农转用",
				onClick : function(event) {
					controller.showAgricultureToUse();
				}
			}, {
				id : "supply",
				label : "已批未供",
				onClick : function(event) {
					controller.showUnSupply();
				}
			}, {
				id : "construct",
				label : "已批未建",
				onClick : function(event) {
					controller.showUnConstruct();
				}
			}, {
				id : "product",
				label : "已批达产",
				onClick : function(event) {
					controller.showProduction();
				}
			}, {
				id : "clear",
				label : "清除",
				onClick : function(event) {
					controller.clear();
				}
			}];
			for (var i in items) {
				var menuItem = new MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		/**
		 * 创建土地评价菜单
		 */
		createLandEvalMenu : function() {
			var controller = this.controller;
			var menu = new Menu();
			var items = [{
				id : "setscope",
				label : "设定评价范围",
				onClick : function(event) {
					controller.setEvaluateScope();
				}
			}, {
				id : "setideal",
				label : "设置理想值",
				onClick : function(event) {
					controller.setIdealValue();
				}
			}, {
				id : "current",
				label : "计算现状值",
				onClick : function(event) {
					controller.computeCurrentValue();
				}
			}, {
				id : "setweight",
				label : "设置权重值",
				onClick : function(event) {
					controller.setWeightValue();
				}
			}, {
				id : "evaluate",
				label : "计算评价结果",
				onClick : function(event) {
					controller.computeEvaluateResult();
				}
			}];
			for (var i in items) {
				var menuItem = new MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		/**
		 * 创建统计分析菜单
		 */
		createStatAnalysisMenu : function() {
			var controller = this.controller;
			var menu = new Menu();
			var items = [{
				id : "indexcompare",
				label : "主要指标对比",
				onClick : function(event) {
					controller.showMajorIndexComparison();
				}
			}, {
				id : "evalcompare",
				label : "评价结果对比",
				onClick : function(event) {
					controller.showEvaluateResultComparison();
				}
			}, {
				id : "economicstat",
				label : "企业经济统计",
				onClick : function(event) {
					controller.showEnterpriseEconomicStatistics();
				}
			}, {
				id : "landeffiency",
				label : "企业用地效益",
				onClick : function(event) {
					controller.showEnterpriseLandUseEffiency();
				}
			}, {
				id : "indicatorrank",
				label : "经济指标排名",
				onClick : function(event) {
					controller.showEconomicIndicatorRank();
				}
			}];
			for (var i in items) {
				var menuItem = new MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		/**
		 * 创建动态更新菜单
		 */
		createDynamicUpdateMenu : function() {
			var controller = this.controller;
			var menu = new Menu();
			var items = [{
				id : "newcase",
				label : "新建案例",
				onClick : function(event) {
					controller.createCase();
				}
			}, {
				id : "casemanage",
				label : "案例管理",
				onClick : function(event) {
					controller.caseManagement();
				}
			}, {
				id : "setcase",
				label : "设置工作案例",
				onClick : function(event) {
					controller.setWorkCase();
				}
			}, {
				id : "editupdate",
				label : "编辑更新",
				onClick : function(event) {
					controller.editUpdate();
				}
			}];
			for (var i in items) {
				var menuItem = new MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		},
		/**
		 * 创建用户管理菜单
		 */
		createUserManageMenu : function() {
			var controller = this.controller;
			var menu = new Menu();
			var items = [{
				id : "humanmanage",
				label : "用户管理",
				onClick : function(event) {
					controller.userManagement();
				}
			}, {
				id : "modifypassword",
				label : "修改密码",
				onClick : function(event) {
					controller.modifyPassword();
				}
			}];
			for (var i in items) {
				var menuItem = new MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		}
	});
});
