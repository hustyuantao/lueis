/**
 * @author tao
 */
require(["dijit/layout/BorderContainer", "dijit/layout/ContentPane", "esri/map", "esri/layers/agsdynamic", "dojo/domReady!"], function(BorderContainer, ContentPane, map, agsdynamic) {
	layout();
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
