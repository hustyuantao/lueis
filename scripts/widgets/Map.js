define(["dojo/_base/declare", "esri/map", "esri/layers/agsdynamic", "esri/layers/agstiled", "esri/layers/FeatureLayer", "esri/geometry/Extent", "esri/SpatialReference", "esri/dijit/OverviewMap", "esri/dijit/Scalebar"], function(declare) {

	return declare("widgets.Map", null, {
		// 地图DOM文档ID
		id : null,
		// Map Server URL
		url : null,
		// 地图
		map : null,
		// 构造函数
		constructor : function(id, url) {
			this.id = id;
			this.url = url;
			this.createMap();			
			this.addLayer();
			this.addOverview();
			this.addScalebar();
		},
		// 创建地图
		createMap : function() {
			var extent = new esri.geometry.Extent({
				xmin : 1.3127794016318366E7,
				ymin : 2830171.116580449,
				xmax : 1.3182805792387761E7,
				ymax : 2841861.751605315,
				spatialReference : {
					wkid : 102100
					//"wkt" : 'PROJCS["92xiamen",GEOGCS["GCS_Krasovsky_1940",DATUM["D_Krasovsky_1940",SPHEROID["Krasovsky_1940",6378245.0,298.3]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Gauss_Kruger"],PARAMETER["False_Easting",100000.0],PARAMETER["False_Northing",-2700000.0],PARAMETER["Central_Meridian",118.5],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]'
				}
			});
			var map = new esri.Map(this.id, {
				zoom : 10,
				extent : extent,
				sliderStyle : "small"
			});
			this.map = map;
		},
		// 加载动态地图服务
		addLayer : function() {
			var china = "http://www.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer";
			var base = new esri.layers.ArcGISTiledMapServiceLayer(china);
			this.map.addLayer(base);
			var layer = new esri.layers.FeatureLayer(this.url+"/0");
			this.map.addLayer(layer);
			//var layer = new esri.layers.ArcGISDynamicMapServiceLayer(this.url);
			//this.map.addLayer(layer);
		},
		// 加载鹰眼
		addOverview : function() {
			// 成员变量在成员函数回调函数中数据类型会发生变化
			var map = this.map;
			this.map.on("load", function() {
				var overviewMap = new esri.dijit.OverviewMap({
					attachTo : "bottom-right",
					map : map,
					visible : true
				});
				overviewMap.startup();
			});
		},
		// 加载比例尺
		addScalebar : function() {
			var map = this.map;
			this.map.on("load", function() {
				var scalebar = new esri.dijit.Scalebar({
					attachTo : "bottom-left",
					map : map,
					scalebarStyle : "line",
					scalebarUnit : "dual"
				});
			});
		}
	});
});
