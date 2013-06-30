define(["dojo/_base/declare", "dijit/form/Button", "dijit/Toolbar", "esri/toolbars/navigation", "esri/toolbars/draw", "esri/symbols/SimpleFillSymbol"], function(declare) {

	return declare("widgets.Tool", null, {
		// 地图
		map : null,
		// 放大DOM文档ID
		zoomInDivId : null,
		zoomInButton : null,
		// 缩小DOM文档ID
		zoomOutDivId : null,
		zoomOutButton : null,
		// 全图DOM文档ID
		zoomFullExtentDivId : null,
		zoomFullExtentButton : null,
		// 回退DOM文档ID
		zoomPrevDivId : null,
		zoomPrevButton : null,
		// 前进DOM文档ID
		zoomNextDivId : null,
		zoomNextButton : null,
		// 手形DOM文档ID
		panDivId : null,
		panButton : null,
		// 取消DOM文档ID
		deactivateDivId : null,
		deactivateButton : null,
		// 画点DOM文档ID
		drawPointDivId : null,
		drawPointButton : null,
		// 画多点DOM文档ID
		drawMultiPointDivId : null,
		drawMultiPointButton : null,
		// 画线DOM文档ID
		drawLineDivId : null,
		drawLineButton : null,
		// 画多线DOM文档ID
		drawPolylineDivId : null,
		drawPolylineButton : null,
		// 画多边形DOM文档ID
		drawPolygonDivId : null,
		drawPolygonButton : null,
		// 画范围DOM文档ID
		drawExtentDivId : null,
		drawExtentButton : null,
		// 导航工具栏
		navToolBar : null,
		// 画图工具栏
		drawToolBar : null,
		// 构造函数
		constructor : function(map, zoomIn, zoomOut, zoomFullExtent, zoomPrev, zoomNext, pan, deactivate, drawPoint, drawMultiPoint, drawLine, drawPolyline, drawPolygon, drawExtent) {
			this.map = map;
			this.zoomInDivId = zoomIn;
			this.zoomOutDivId = zoomOut;
			this.zoomFullExtentDivId = zoomFullExtent;
			this.zoomPrevDivId = zoomPrev;
			this.zoomNextDivId = zoomNext;
			this.panDivId = pan;
			this.deactivateDivId = deactivate;
			this.drawPointDivId = drawPoint;
			this.drawMultiPointDivId = drawMultiPoint;
			this.drawLineDivId = drawLine;
			this.drawPolylineDivId = drawPolyline;
			this.drawPolygonDivId = drawPolygon;
			this.drawExtentDivId = drawExtent;

			this.load();
		},
		// 加载工具条
		load : function() {
			this.create();
			this.startup();
		},
		// 创建工具条
		create : function() {
			var navToolBar = new esri.toolbars.Navigation(this.map.map);
			this.navToolBar = navToolBar;
			var drawToolBar = new esri.toolbars.Draw(this.map.map);
			this.drawToolBar = drawToolBar;
			this.zoomInButton = new dijit.form.Button({
				iconClass : "zoomInIcon",
				showLabel : false,
				label : "放大",
				onClick : function() {
					navToolBar.activate(esri.toolbars.Navigation.ZOOM_IN);
				}
			}, this.zoomInDivId);
			this.zoomOutButton = new dijit.form.Button({
				iconClass : "zoomOutIcon",
				showLabel : false,
				label : "缩小",
				onClick : function() {
					navToolBar.activate(esri.toolbars.Navigation.ZOOM_OUT);
				}
			}, this.zoomOutDivId);
			this.zoomFullExtentButton = new dijit.form.Button({
				iconClass : "zoomFullExtentIcon",
				showLabel : false,
				label : "全图",
				onClick : function() {
					navToolBar.zoomToFullExtent();
				}
			}, this.zoomFullExtentDivId);
			this.zoomPrevButton = new dijit.form.Button({
				iconClass : "zoomPrevIcon",
				showLabel : false,
				label : "回退",
				onClick : function() {
					navToolBar.zoomToPrevExtent();
				}
			}, this.zoomPrevDivId);
			this.zoomNextButton = new dijit.form.Button({
				iconClass : "zoomNextIcon",
				showLabel : false,
				label : "前进",
				onClick : function() {
					navToolBar.zoomToNextExtent();
				}
			}, this.zoomNextDivId);
			this.panButton = new dijit.form.Button({
				iconClass : "panIcon",
				showLabel : false,
				label : "手形",
				onClick : function() {
					navToolBar.activate(esri.toolbars.Navigation.PAN);
				}
			}, this.panDivId);
			this.deactivateButton = new dijit.form.Button({
				iconClass : "deactivateIcon",
				showLabel : false,
				label : "取消",
				onClick : function() {
					navToolBar.deactivate();
				}
			}, this.deactivateDivId);
			this.drawPointButton = new dijit.form.Button({
				iconClass : "drawPointIcon",
				showLabel : false,
				label : "点",
				onClick : function() {
					drawToolBar.activate(esri.toolbars.Draw.POINT);
				}
			}, this.drawPointDivId);
			this.drawMultiPointButton = new dijit.form.Button({
				iconClass : "drawMultiPointIcon",
				showLabel : false,
				label : "多点",
				onClick : function() {
					drawToolBar.activate(esri.toolbars.Draw.MULTI_POINT);
				}
			}, this.drawMultiPointDivId);
			this.drawLineButton = new dijit.form.Button({
				iconClass : "drawLineIcon",
				showLabel : false,
				label : "线",
				onClick : function() {
					drawToolBar.activate(esri.toolbars.Draw.LINE);
				}
			}, this.drawLineDivId);
			this.drawPolylineButton = new dijit.form.Button({
				iconClass : "drawPolylineIcon",
				showLabel : false,
				label : "折线",
				onClick : function() {
					drawToolBar.activate(esri.toolbars.Draw.FREEHAND_POLYLINE);
				}
			}, this.drawPolylineDivId);
			this.drawPolygonButton = new dijit.form.Button({
				iconClass : "drawPolygonIcon",
				showLabel : false,
				label : "多边形",
				onClick : function() {
					drawToolBar.activate(esri.toolbars.Draw.FREEHAND_POLYGON);
				}
			}, this.drawPolygonDivId);
			this.drawExtentButton = new dijit.form.Button({
				iconClass : "drawExtentIcon",
				showLabel : false,
				label : "范围",
				onClick : function() {
					drawToolBar.activate(esri.toolbars.Draw.EXTENT);
				}
			}, this.drawExtentDivId);
		},
		startup : function() {
			this.zoomInButton.startup();
			this.zoomOutButton.startup();
			this.zoomFullExtentButton.startup();
			this.zoomPrevButton.startup();
			this.zoomNextButton.startup();
			this.panButton.startup();
			this.deactivateButton.startup();
			this.drawPointButton.startup();
			this.drawMultiPointButton.startup();
			this.drawLineButton.startup();
			this.drawPolylineButton.startup();
			this.drawPolygonButton.startup();
			this.drawExtentButton.startup();

			var navToolBar = this.navToolBar;
			var zoomPrevButton = this.zoomPrevButton;
			var zoomNextButton = this.zoomNextButton;
			dojo.connect(this.navToolBar, "onExtentHistoryChange", function() {
				zoomPrevButton.disabled = navToolBar.isFirstExtent();
				zoomNextButton.disabled = navToolBar.isLastExtent();
			});

			var drawToolBar = this.drawToolBar;
			var map = this.map.map;
			var url = this.map.url + "/7";
			var task = new esri.tasks.QueryTask(url);
			var query = new esri.tasks.Query();
			dojo.connect(this.drawToolBar, "onDrawEnd", function(drawGeometry) {
				// 清除当前画图
				drawToolBar.deactivate();
				map.graphics.clear();
				// 根据几何形状查询
				query.geometry = drawGeometry;
				query.outFields = ["*"];
				query.outSpatialReference = map.spatialReference;
				query.spatialRelationship = esri.tasks.Query.SPATIAL_REL_CONTAINS;
				query.returnGeometry = true;
				task.execute(query, function(featureSet) {
					var graphics = featureSet.features;
					for (var i in graphics) {
						var geometry = graphics[i].geometry;
						var symbol;
						switch(graphics[i].geometry.type) {
							case "point":
								symbol = new esri.symbol.SimpleMarkerSymbol();
								break;
							case "polyline":
								symbol = new esri.symbol.SimpleLineSymbol();
								symbol.setColor(new dojo.Color([255,0,0]));
								symbol.setWidth(2);
								break;
							case "polygon":
								symbol = new esri.symbol.SimpleFillSymbol();
								var outline =  new esri.symbol.SimpleLineSymbol();
								outline.setColor(new dojo.Color([255,0,0]));
								outline.setWidth(2);
								symbol.setOutline(outline);
								break;
						}
						var graphic = new esri.Graphic(geometry, symbol);
						map.graphics.add(graphic);
					}
				});
			});
		}
	});
});
