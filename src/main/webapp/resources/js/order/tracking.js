$.ajax({
	url:"http://info.sweettracker.co.kr/api/v1/companylist",
	method:"GET",
	data:{
		t_key:"USYY89WQ5GURGUUAUHI1OA",
	},
	success:function(result){
		console.log(result);
	},
	error:function(error){
		alert("실패...")
	}
});