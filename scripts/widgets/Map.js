define(["dojo/_base/declare", "esri/map", "esri/layers/agsdynamic", "esri/dijit/OverviewMap", "esri/dijit/Scalebar"], function(declare) {

	return declare("widgets.Map", null, {
		// 地图DOM文档ID
		id : null,
		// Map Server URL
		url : null,
		// 地图
		map : null,
		// 鹰眼图
		overviewMap : null,
		// 服务图层
		layer : null,
		// 构造函数
		constructor : function(id, url) {
			this.id = id;
			this.url = url;
			this.loadBaseMap();
			this.loadOverviewMap();
			this.loadScalebar();
		},
		// 加载底层地图
		loadBaseMap : function() {
			this.map = new esri.Map(this.id, {
				zoom : 20,
				sliderStyle : "small"
			});
			var layer = new esri.layers.ArcGISDynamicMapServiceLayer(this.url);
			this.map.addLayer(layer);
		},
		// 加载鹰眼图
		loadOverviewMap : function() {
			// 成员变量在成员函数回调函数中数据类型会发生变化
			var basemap = this.map;
			this.map.on("load", function() {
				var overviewMap = new esri.dijit.OverviewMap({
					attachTo : "bottom-right",
					map : basemap,
					visible : true
				});
				overviewMap.startup();
			});
		},
		// 加载比例尺
		loadScalebar : function(){
			var basemap = this.map;
			this.map.on("load", function() {
				var scalebar = new esri.dijit.Scalebar({
					attachTo : "bottom-left",
					map : basemap,
					scalebarStyle : "line",
					scalebarUnit : "dual"
				});
			});
		}
	});
});
