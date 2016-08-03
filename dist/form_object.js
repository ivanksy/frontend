"use strict";$.fn.formObject=function(){var n={};return $.each($(this).serializeArray(),function(t,i){n[i.name]=i.value||""}),n};
