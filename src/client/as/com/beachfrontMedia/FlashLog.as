package com.beachfrontMedia 
{
	import com.bit101.components.PushButton;
	import flash.display.Sprite;
	import com.beachfrontMedia.cross.JsAsBridge;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	
	/**
	 * ...
	 * @author Chris Anderson
	 */
	public class FlashLog extends Sprite
	{
		static private var _tfLog:TextField;
		static private var _jsAsBridgeInstance:JsAsBridge;
		
		private var _tfLogInput:TextField;
		private var _bnLogMessageFlash:PushButton;
		private var _bnLogMessageJS:PushButton;
		
		public function FlashLog() 
		{
			super();
			
			_init();
		}
		
		private function _init():void
		{
			_drawUI();
			
			_jsAsBridgeInstance = new JsAsBridge();
			
			var tempFlashLogMessage:String = 'local message (Flash)';
			
			FlashLog.logMessage(tempFlashLogMessage);
		}
		
		private function _drawUI():void
		{
			trace('FlashLog._drawUI()');
			
			_tfLog = new TextField();
			_tfLog.border = true;
			_tfLog.width = 380;
			_tfLog.height = 220;
			_tfLog.x = 10;
			_tfLog.y = 70;
			
			addChild(_tfLog);
			
			_tfLogInput = new TextField();
			_tfLogInput.type = 'input';
			_tfLogInput.border = true;
			_tfLogInput.width = 150;
			_tfLogInput.height = 22;
			_tfLogInput.x = 10;
			_tfLogInput.y = 40;
			
			addChild(_tfLogInput);
			
			_bnLogMessageFlash = new PushButton(this, _tfLogInput.x + _tfLogInput.width + 10, _tfLogInput.y + 3, 'Log Message (Flash)');
			_bnLogMessageJS = new PushButton(this, _bnLogMessageFlash.x + _bnLogMessageFlash.width + 10, _tfLogInput.y + 3, 'Log Message (JS)');
			
			_bnLogMessageFlash.addEventListener(MouseEvent.CLICK, _onBnLogMessageFlashClick, false, 0, true);
			_bnLogMessageJS.addEventListener(MouseEvent.CLICK, _onBnLogMessageJSClick, false, 0, true);
		}
		
		static public function logMessage(message:String = ''):void
		{
			message += '\n';
			
			_tfLog.appendText(message);
		}
		
		static public function logMessageJS(message:String = ''):void
		{
			_jsAsBridgeInstance.logMessageJS(message);
		}
		
		private function _onBnLogMessageFlashClick(event:Event = null):void
		{
			FlashLog.logMessage(_tfLogInput.text + ' (Flash)');
		}
		
		private function _onBnLogMessageJSClick(event:Event = null):void
		{
			FlashLog.logMessageJS(_tfLogInput.text + ' (Flash)');
		}
	}
}