define(["dojo/_base/declare", "dojo/dom-construct", "dojox/layout/FloatingPane"], function(declare, domConstruct, FloatingPane) {

	return declare("widgets.WindowPane", null, {
		/**
		 *窗口标题
		 */
		title : null,
		/**
		 *获取窗口标题
		 */
		getTitle : function() {

			return this.title;
		},
		/**
		 *设置窗口标题
		 */
		setTitle : function(title) {
			this.title = title;
		},
		/**
		 *窗口位置
		 */
		position : {
			top : 0,
			left : 0,
			width : 0,
			height : 0
		},
		/**
		 *获取窗口位置
		 */
		getPosition : function() {

			return this.position;
		},
		/**
		 *设置窗口位置
		 */
		setPosition : function(position) {
			this.position = position;
		},
		/**
		 *浮动窗口面板
		 */
		pane : null,
		/**
		 *获取浮动窗口面板
		 */
		getPane : function() {

			return this.pane;
		},
		/**
		 *设置浮动窗口面板
		 */
		setPane : function(pane) {

			this.pane = pane;
		},
		/**
		 *创建浮动窗口面板
		 */
		create : function() {
			var position = this.position;
			var title = this.title;
			var style = "position:absolute; top:" + position.top + "px; left: " + position.left + "px; width: " + position.width + "px; height: " + position.height + "px;";
			var pane = new FloatingPane({
				title : title,
				closeable : true,
				dockable : true,
				resizable : true,
				maxable : true,				
				style : style
			}, domConstruct.create('div', null, dojo.body()));
			
			return pane;
		},
		/**
		 *启动浮动窗口面板
		 */
		startup : function() {
			this.pane.startup();
		},
		/**
		 *构造函数
		 */
		constructor : function(title, position) {
			if (arguments.length == 2) {
				this.title = title;
				this.position = position;
				this.pane = this.create();
			}
		},
		/**
		 *窗口内容 
		 */
		content : null,
		/**
		 *获取窗口内容 
		 */
		getContent : function() {
			
			return this.content;
		},
		/**
		 *设置窗口内容 
		 */
		setContent : function(content) {
			this.content = content;
			this.pane.addChild(content);
		}
	});
});
