define(["dojo/_base/declare", "dijit/Menu", "dijit/MenuBar", "dijit/MenuItem", "dijit/MenuBarItem", "dijit/PopupMenuItem", "dijit/PopupMenuBarItem"], function(declare) {

	return declare("widgets.Menu", null, {
		// 菜单DOM文档ID
		id : null,
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
		// 构造函数
		constructor : function(id) {
			this.id = id;
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
		// 监听时间
		listen : function() {
			
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
			var items = [{
				id : "graphicintr",
				label : "图文介绍"
			}, {
				id : "videointr",
				label : "视频介绍"
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
			var menu = new dijit.Menu();
			var items = [{
				id : "torchpark",
				label : "火炬园区"
			}, {
				id : "xianganpark",
				label : "翔安园区"
			}, {
				id : "tongjipark",
				label : "同集园区"
			}, {
				id : "photoelectricpark",
				label : "信息光电园"
			}, {
				id : "softwarepark",
				label : "软件园一期"
			}, {
				id : "biologicalpark",
				label : "北大生物园"
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
				label : "图层管理"
			}, {
				id : "maplegend",
				label : "地图图例"
			}, {
				id : "integrate",
				label : "集成共享"
			}, {
				id : "clearselect",
				label : "清除选择"
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
				label : "由表查图"
			}, {
				id : "querymap",
				label : "地图查询"
			}, {
				id : "labelmap",
				label : "地图标注"
			}, {
				id : "exportmap",
				label : "导出地图"
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
				label : "已批农转用"
			}, {
				id : "supply",
				label : "已批未供"
			}, {
				id : "construct",
				label : "已批未建"
			}, {
				id : "product",
				label : "已批达产"
			}, {
				id : "clear",
				label : "清除"
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
				label : "设定评价范围"
			}, {
				id : "setideal",
				label : "设置理想值"
			}, {
				id : "current",
				label : "计算现状值"
			}, {
				id : "setweight",
				label : "设置权重值"
			}, {
				id : "evaluate",
				label : "计算评价结果"
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
				label : "主要指标对比"
			}, {
				id : "evalcompare",
				label : "评价结果对比"
			}, {
				id : "economicstat",
				label : "企业经济统计"
			}, {
				id : "landeffiency",
				label : "企业用地效益"
			}, {
				id : "indicatorrank",
				label : "经济指标排名"
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
				label : "新建案例"
			}, {
				id : "casemanage",
				label : "案例管理"
			}, {
				id : "setcase",
				label : "设置工作案例"
			}, {
				id : "editupdate",
				label : "编辑更新"
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
				label : "用户管理"
			}, {
				id : "modifypassword",
				label : "修改密码"
			}];
			for (var i in items) {
				var menuItem = new dijit.MenuItem(items[i]);
				menu.addChild(menuItem);
			}

			return menu;
		}
	});
});
