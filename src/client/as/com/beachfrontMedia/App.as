package com.beachfrontMedia 
{
	import flash.display.Sprite;
	import flash.text.TextField;
	
	/**
	 * ...
	 * @author Chris Anderson
	 */
	public class App extends Sprite 
	{
		private var _tfTitle:TextField;
		private var _flashLogInstance:FlashLog;
		
		public function App() 
		{
			super();
			
			_init();
		}
		
		private function _init():void
		{
			_drawUI();
			
			addChild(new FlashLog());
			
			FlashLog.logMessage('app message (Flash)');
		}
		
		private function _drawUI():void
		{
			trace('App._drawUI()');
			
			_tfTitle = new TextField();
			_tfTitle.width = 200;
			_tfTitle.x = _tfTitle.y = 10;
			_tfTitle.text = 'Flash Log Example';
			_tfTitle.selectable = false;
			
			addChild(_tfTitle);
		}
	}
}