define(["dojo/_base/declare", "esri/tasks/QueryTask"], function(declare, QueryTask) {

	return declare("widgets.MapController", null, {
		/**
		 *根据地图属性设置地图显示范围
		 * @param {Object} map 地图
		 * @param {Object} url 地图URL
		 * @param {Object} attribute 地图属性
		 */
		setExtentByAttribute : function(map, url, attribute) {
			var task = new QueryTask(url);
			var query = new esri.tasks.Query();
			query.where = "YQMC = '" + attribute + "'";
			query.outFields = ["*"];
			query.returnGeometry = true;
			task.execute(query, function(featureSet) {
				var graphics = featureSet.features;
				if (graphics.length > 0) {
					var extent = graphics[0].geometry.getExtent();
					for (var i = 1; i < graphics.length; i++) {
						extent = extent.union(graphics[i].geometry.getExtent());
					}
					map.setExtent(extent);
				}
			});
		}
	});
});
