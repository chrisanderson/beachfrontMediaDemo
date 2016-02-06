package com.beachfrontMedia.cross 
{
	import flash.external.ExternalInterface;
	import com.beachfrontMedia.lookups.JsExposedMethods;
	import com.beachfrontMedia.FlashLog;
	
	/**
	 * ...
	 * @author Chris Anderson
	 */
	public class JsAsBridge 
	{
		public function JsAsBridge() 
		{
			_init();
		}
		
		private function _init():void
		{
			if(!ExternalInterface.available)
			{
				throw new Error('ExternalInterface is not available.');
			}
		}
		
		public function logMessageJS(message:String = ''):void
		{
			ExternalInterface.call(JsExposedMethods.LOG_MESSAGE_JS, message);
		}
	}
}