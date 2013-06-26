/**
 * @author tao
 */
require(["dijit/layout/BorderContainer", "dijit/layout/ContentPane", "widgets/Map", "widgets/Menu", "dojo/domReady!"], function(BorderContainer, ContentPane, Map, Menu) {
	layout();
	var menu = new widgets.Menu("menu");
	var map = new widgets.Map("map", "http://192.168.0.68:6080/arcgis/rest/services/KFQ2013/MapServer");
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
