$(function(){
	$('#rollno').on('blur',function(e){
		alert("a");
		if(!/(\d{2}((co)|(dco)|(ee)|(dee)|(ex)|(dex))\d{2,3})/i.test(this.value)){
			alert("invalid roll no");
			this.value="";
			
			$(this).focus();
		}
	});
	$('#sname').on('keyprees',function(e){
		if (/[^a-zA-Z ]/test(e.key)) {
			alert("invalid name .only alphabets are allow")
			this.value="";
			$(this).focus();
			return false;
		}
	});
	$('#semail').on('keyprees',function(e){
		if(/[^a-zA-Z @_0-9]/test(e.key)){
			alert("invalid"):
			this.value="";
			$(this).focus();
		}
	});
});