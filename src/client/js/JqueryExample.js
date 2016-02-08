app.JqueryExample = (function()
{
  return{
    _init:function()
    {
      console.log('JqueryExample._init()');

      app.JsLog.logMessage('JqueryExample._init()');
    },

    logList:function(list)
    {
      list = list || [];

      var tempMessage = '';
      var tempListLength = list.length;
      var tempListLengthMax = tempListLength - 1;

      $.each(list, function(index, item)
      {
        tempMessage += 'id: ' + item.id + ' name: ' + item.name + ' (JS)';

        if(index < tempListLengthMax)
        {
          tempMessage += '<br>';
        }
      });

      app.JsLog.logMessage('JqueryExample.logList() <br>' + tempMessage);
    }
  };
}());