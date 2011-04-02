/*
jQuery Namely Plugin
-------------------------
Standardize name inputs

Copyright (c) 2011 Stuart Lawder, Lawderberry Ltd.

Version: 1.0.0 (4/2/2011)
Requires: jQuery v1.3+

http://www.lawderberry.com/namely

*/

(function($){
  $.fn.extend({ 
      namely: function() {
        return this.each(function() {
          $(this).blur(function(){
            var txt = $(this).val();
            //split txt into words
            var arr = txt.split(" ");
            var x = 0;
            for (x in arr){
              var str = arr[x];
              var firstLetter = str.substr(0, 1);
              var rest = str.substr(1);
              //if one letter is capp in rest of string leave it
              var y = rest.split(/[A-Z]/g);
              if(y.length > 2) {
                rest = rest.toLowerCase();
              } 
              arr[x] = firstLetter.toUpperCase() + rest;
            }
            txt = arr.join(" ");
            $(this).val(txt);
          });
        });
      }
    });
})(jQuery);
