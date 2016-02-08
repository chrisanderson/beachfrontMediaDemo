package
{
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.display.StageAlign;
	import com.beachfrontMedia.App;
	
	/**
	 * ...
	 * @author Chris Anderson
	 */
	public class Main extends Sprite 
	{
		public function Main() 
		{
			if(stage)
			{
				_init();
			}
			else
			{
				addEventListener(Event.ADDED_TO_STAGE, _init, false, 0, true);
			}
		}
		
		private function _init(event:Event = null):void 
		{
			if(hasEventListener(Event.ADDED_TO_STAGE))
			{
				removeEventListener(Event.ADDED_TO_STAGE, _init);
			}
			
			stage.align = StageAlign.TOP_LEFT;
			
			stage.addChild(new App());
		}
	}
}