"use strict";!function(){function n(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")}function t(){$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast")}function i(n){$.ajax({url:n.attr("action"),method:"POST",data:n.formObject(),dataType:"json",success:function(){alert("Se ha enviado tu mensaje, se responderá a la brevedad.")}})}function a(){var n=$("#description"),t=n.height();return $(window).scrollTop()>$(window).height()-2*t}var e=!1,s=0,o=$("[data-name='image-counter']").attr("content");$("#contact-form").on("submit",function(n){return n.preventDefault(),i($(this)),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),setInterval(function(){o>s?s++:s=0,$("#gallery .inner").css({left:"-"+100*s+"%"})},4e3),$(window).scroll(function(){var i=a();i&&!e&&(e=!0,n()),!i&&e&&(e=!1,t())})}();
