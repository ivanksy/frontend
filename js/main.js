;(function(){

	let sticky = false
	let currentPosition = 0

	const imageCounter = $("[data-name='image-counter']").attr("content")
	
	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

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

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}


})()