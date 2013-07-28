/**
 * @author tao
 */
var contentDivId = "content";
var bannerDivId = "banner";
var menuDivId = "menu";
var mapDivId = "map";
//var url = "http://192.168.0.68:6080/arcgis/rest/services/KFQ2013/MapServer";
var url = "http://192.168.0.63:6080/arcgis/rest/services/KFQ/MapServer";
var menu;
var tool;
var map;

require(["dijit/layout/BorderContainer", "dijit/layout/ContentPane", "widgets/Map", "widgets/Menu", "widgets/Tool","dojo/domReady!"], function() {
	layout();
	map = new widgets.Map(mapDivId, url);
	menu = new widgets.Menu(menuDivId, map);
	tool = new widgets.Tool(map, "zoomin", "zoomout", "zoomfullext", "zoomprev", "zoomnext", "pan", "deactivate", "drawpoint", "drawmultipoint", "drawline", "drawpolyline", "drawpolygon", "drawextent");
});

// 页面布局
function layout() {
	var contentContainer = new dijit.layout.BorderContainer({
		design : "headline"
	}, contentDivId);
	var bannerPane = new dijit.layout.ContentPane({
		region : "top"
	}, bannerDivId);
	var mapPane = new dijit.layout.ContentPane({
		region : "center"
	}, mapDivId);
	contentContainer.addChild(bannerPane);
	contentContainer.addChild(mapPane);
	contentContainer.startup();
}
