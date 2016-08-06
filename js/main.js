;(function(){

	let sticky = false
	let currentPosition = 0

	const imageCounter = $("[data-name='image-counter']").attr("content")
	const email = "ivan.nieto.lozada@gmail.com"

	$("#contact-form").on("submit",function(ev){
		ev.preventDefault()

		sendForm($(this))

		return false
	})

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	$("#menu-opener").on("click",function(){
		$("#responsive-nav ul").toggleClass("active")
	})

	setInterval(function(){
		
		if (currentPosition < imageCounter) {
			currentPosition++
		}else{
			currentPosition = 0
		}

		$("#gallery .inner").css({
			left: "-"+currentPosition*100+"%"
		})

	},4000)
	

	$(window).scroll(function(){
		const inBottom = isInBottom()

		if (inBottom && !sticky){
			// Mostrar la navegación sticky
			sticky = true
			stickNavigation()
		}
		if(!inBottom && sticky){
			// Ocultar la navegación sticky
			sticky = false
			unStickNavigation()

		}
	})

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp("fast")
		$("#sticky-navigation").slideDown("fast")
	}

	function unStickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}

	function sendForm($form){
		$.ajax({
			url: $form.attr("action"), 
			method: "POST",
			data: $form.formObject(),
			dataType: "json",
			success: function(){
				alert("Se ha enviado tu mensaje, se responderá a la brevedad.")
			} 
})

	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}


})()