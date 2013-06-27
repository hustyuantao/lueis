require(["dojo/_base/declare", "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "widgets/Map", "widgets/Menu"], function(declare) {
	
	return declare("widgets.Frame", null, {
		// 框架DOM文档ID
		contentId : null,
		// 顶部DOM文档ID
		bannerId : null,
		// 地图DOM文档ID
		mapId : null,
		// 菜单DOM文档ID
		menuId : null,
		menu : null,
		map : null,
		url : null,
		// 构造函数
		constructor : function(content, banner, map, menu, url) {
			this.contentId = content;
			this.bannerId = banner;
			this.mapId = map;
			this.menuId = menu;
			this.url = url;
			console.log("content = "+content);
			console.log("banner = "+banner);
			console.log("map = "+map);
			console.log("menu = "+menu);
			console.log("url = "+url);
			//this.layout();
			//this.menu = new widgets.Menu(this.menuId);
			//this.map = new widgets.Map(this.mapId, this.url);
		},
		// 页面布局
		layout : function() {
			var contentContainer = new dijit.layout.BorderContainer({
				design : "headline"
			}, this.contentId);
			var bannerPane = new dijit.layout.ContentPane({
				region : "top"
			}, this.bannerId);
			var mapPane = new dijit.layout.ContentPane({
				region : "center"
			}, this.mapId);
			contentContainer.addChild(bannerPane);
			contentContainer.addChild(mapPane);
			contentContainer.startup();
		}
	});
});
