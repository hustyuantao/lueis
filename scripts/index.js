/**
 * @author tao
 */
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");
dojo.require("esri.map");
dojo.require("esri.layers.agsdynamic");

var map;
function init() {
	map = new esri.Map("map", {
		zoom : 20,
		sliderStyle : "small"
	});
	var layer = new esri.layers.ArcGISDynamicMapServiceLayer(
			"http://192.168.0.68:6080/arcgis/rest/services/KFQ2013/MapServer");
	map.addLayer(layer);
}

dojo.ready(init);