;(function(){

	const selector = "#contact-form"

	$(selector).find(".input").on("change",(ev)=>{

		let $firstInput = $(ev.target)
		let $nextInput = $firstInput.next(".step")
		console.log($nextInput.length)

		if ($nextInput.length > 0){
			focusNextInput($nextInput)
		}else{
			console.log("Hola2")
			validateForm()
		}
	})

	function validateInput(){
		 return document.querySelector(selector).checkValidity()
	}
	function validateForm(){
		if (validateInput()) {

		}else{
			let $inputInvalid = $(selector).find(".input:invalid").first().parent()
			focusNextInput($inputInvalid)
		}
	}
	function focusNextInput($nextInput){
		$nextInput.focus()

	}
})()