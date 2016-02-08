'use strict';

var app = {};
var globalMessage = 'global message (JS)';

$(function()
{
  $.getScript('/js/JsLog.js')
    .done(function(result, status)
    {
      app.JsLog._init();

      console.log(app.JsLog.logMessage(globalMessage));
      console.log(app.JsLog.logMessage(app.JsLog.exposedMessage));
    })
    .fail(function(xhr, settings, error)
    {
      //
    });

  $.getScript('/js/JqueryExample.js')
    .done(function(result, status)
    {
      app.JqueryExample._init();

      var tempList = [{id:0, name:'test33'}, {id:1, name:'test34'}, {id:2, name:'test35'}];

      app.JqueryExample.logList(tempList);
    })
    .fail(function(xhr, settings, error)
    {
      //
    });
});

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
    ,wmode:"direct"
  };

  var attributes = {
    id:"swfContainer"
    ,name:"swfContainer"
  };

  swfobject.embedSWF(
    "swf/app.swf"
    ,"swfContainer", "400", "300", "18"
    ,"expressInstall.swf"
    ,flashvars, params, attributes);
}());