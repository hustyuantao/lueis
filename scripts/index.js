/**
 * @author tao
 */
require(["dijit/layout/BorderContainer", "dijit/layout/ContentPane", "esri/map", "esri/layers/agsdynamic", "dijit/Menu", "dijit/MenuBar", "dijit/PopupMenuItem", "dijit/PopupMenuBarItem", "dijit/MenuItem", "dijit/MenuBarItem", "dojo/domReady!"], function(BorderContainer, ContentPane, map, agsdynamic, Menu, MenuBar, PopupMenuItem, PopupMenuBarItem, MenuItem, MenuBarItem) {
	layout();
	loadMenu();
	loadMap();
});

/**
 * 页面布局
 */
function layout() {
	var contentContainer = new dijit.layout.BorderContainer({
		design : "headline"
	}, "content");
	var bannerPane = new dijit.layout.ContentPane({
		region : "top"
	}, "banner");
	var mapPane = new dijit.layout.ContentPane({
		region : "center"
	}, "map");
	contentContainer.addChild(bannerPane);
	contentContainer.addChild(mapPane);
	contentContainer.startup();
}

/**
 * 加载菜单
 */
function loadMenu() {
	var parkInfoMenu = createParkInfoMenu();
	var mapOptMenu = createMapOptMenu();
	var landManageMenu = createLandManageMenu();
	var landInfoMenu = createLandInfoMenu();
	var landEvalMenu = createLandEvalMenu();
	var statAnalysisMenu = createStatAnalysisMenu();
	var dynamicUpdateMenu = createDynamicUpdateMenu();
	var userManageMenu = createUserManageMenu();
	var menu = createMenu(parkInfoMenu, mapOptMenu, landManageMenu, landInfoMenu, landEvalMenu, statAnalysisMenu, dynamicUpdateMenu, userManageMenu);
	menu.startup();
	parkInfoMenu.startup();
	mapOptMenu.startup();
	landManageMenu.startup();
	landInfoMenu.startup();
	landEvalMenu.startup();
	statAnalysisMenu.startup();
	dynamicUpdateMenu.startup();
	userManageMenu.startup();
}

/**
 * 创建菜单
 */
function createMenu(parkInfoMenu, mapOptMenu, landManageMenu, landInfoMenu, landEvalMenu, statAnalysisMenu, dynamicUpdateMenu, userManageMenu) {
	var menu = new dijit.MenuBar({}, "menu");

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
		var menuItem = new dijit.PopupMenuBarItem(items[i]);
		menu.addChild(menuItem);
	}

	return menu;
}

/**
 * 创建园区信息菜单
 */
function createParkInfoMenu() {
	var menu = new dijit.Menu();
	var items = [{
		id : "graphicintr",
		label : "图文介绍"
	}, {
		id : "videointr",
		label : "视频介绍"
	}, {
		id : "parkguide",
		label : "园区导览"
	}];
	for (var i in items) {
		var menuItem = new dijit.MenuItem(items[i]);
		menu.addChild(menuItem);
	}

	return menu;
}

/**
 * 创建园区导览菜单
 */
function createParkGuideMenu() {
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
}

/**
 * 创建地图操作菜单
 */
function createMapOptMenu() {
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
}

/**
 * 创建用地管理菜单
 */
function createLandManageMenu() {
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
}

/**
 * 创建土地信息菜单
 */
function createLandInfoMenu() {
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
}

/**
 * 创建土地评价菜单
 */
function createLandEvalMenu() {
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
}

/**
 * 创建统计分析菜单
 */
function createStatAnalysisMenu() {
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
}

/**
 * 创建动态更新菜单
 */
function createDynamicUpdateMenu() {
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
}

/**
 * 创建用户管理菜单列表
 */
function createUserManageMenu() {
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

/**
 * 加载地图
 */
function loadMap() {
	var map = new esri.Map("map", {
		zoom : 20,
		sliderStyle : "small"
	});
	var mapServer = "http://192.168.0.68:6080/arcgis/rest/services/KFQ2013/MapServer";
	var layer = new esri.layers.ArcGISDynamicMapServiceLayer(mapServer);
	map.addLayer(layer);
}
