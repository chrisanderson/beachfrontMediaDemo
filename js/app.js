'use strict';

var app = {};
var globalMessage = 'global message (JS)';

//demoing a non-exposed iife to keep some methods and props scoped locally
(function()
{
  //setting up swfobject.  doesn't usually sit nested in an iife that's just for demoing closed scope
  var flashvars = {};

  var params = {
    menu:"false"
    ,scale:"noScale"
    ,allowFullscreen:"true"
    ,allowScriptAccess:"always"
    ,bgcolor:"#f0f0f0"
    ,wmode:"direct"//can cause issues with FP settings & webcam
  };

  var attributes = {
    id:"swfContainer"
    ,name:"swfContainer"
  };

  swfobject.embedSWF(
    "swf/app.swf"
    ,"swfContainer", "400", "300", "10.0.0"
    ,"expressInstall.swf"
    ,flashvars, params, attributes);
}());


//exposed iife to keep some methods and props scoped locally but still accessible to the global scope
app.JsLog = (function()
{
  var localMessage = 'local message (JS)';
  var jsLogElement;
  var jsTextInputElement;
  var jsLogButtonElement;

  return{
    exposedMessage:'exposed message (JS)',

    _init:function()
    {
      console.log('JsLog.init()');

      jsLogElement = document.querySelector('#jsLog');
      jsTextInputElement = document.querySelector('#jsTextInput');
      jsLogButtonElement = document.querySelector('#jsLogButton');

      this.logMessage(localMessage);
    },

    logMessage:function(message)
    {
      message = message || '';

      console.log('JsLog.logMessage() message: ' + message);

      var tempMessage = 'JsLog.logMessage() message: ' + message + '<br/>';

      jsLogElement.innerHTML += tempMessage;

      return tempMessage;
    },

    onLogButtonClick:function()
    {
      this.logMessage(jsTextInputElement.value + ' (JS)');
    }
  };
}());
app.JsLog._init();

console.log(app.JsLog.logMessage(globalMessage));
console.log(app.JsLog.logMessage(app.JsLog.exposedMessage));