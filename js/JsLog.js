//exposed iife to keep some methods and props scoped locally but still accessible to the global scope
app.JsLog = (function()
{
  var localMessage = 'local message (JS)';

  //dom references
  var jsLogElement = $('#jsLog');
  var jsTextInputElement = $('#jsTextInput');
  var jsLogButtonElement = $('#jsLogButton');

  return{
    exposedMessage:'exposed message (JS)',

    _init:function()
    {
      console.log('JsLog._init()');

      jsLogButtonElement.click($.proxy(this.onLogButtonClick, this));

      this.logMessage(localMessage);
    },

    logMessage:function(message)
    {
      message = message || '';

      console.log('JsLog.logMessage() message: ' + message);

      var tempMessage = message + '<br/>';

      jsLogElement.append(tempMessage);

      return tempMessage;
    },

    onLogButtonClick:function()
    {
      this.logMessage(jsTextInputElement.val() + ' (JS)');
    }
  };
}());