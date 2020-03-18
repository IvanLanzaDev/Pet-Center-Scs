// JavaScript Document
jQuery(document).ready(function() {

	//MENU
	$('#servicos_hospital_btn').click(function(){
		$('#hospital').slideDown()
		$('#petshop, #exames, #banhoetosa').hide()
	});

	$('#servicos_pet_btn').click(function(){
		$('#petshop').slideDown()
		$('#hospital, #exames, #banhoetosa').hide()
	});

	$('#servicos_exm_btn').click(function(){
		$('#exames').slideDown()
		$('#hospital, #petshop, #banhoetosa').hide()
	});

	$('#servicos_banho_btn').click(function(){
		$('#banhoetosa').slideDown()
		$('#hospital, #petshop, #exames').hide()
	});

	//BOTAO
	$('#hospital, #petshop, #exames, #banhoetosa').hide()

	$('#hospital_btn').click(function(){
		$('#petshop').slideDown()
		$('#hospital, #exames, #banhoetosa').hide()
		$('a').removeClass('ativo');
		$(this).addClass('ativo');
	});

	$('#petshop_btn').click(function(){
		$('#hospital').slideDown()
		$('#petshop, #exames, #banhoetosa').hide()
		$('a').removeClass('ativo');
		$(this).addClass('ativo');
	});
	$('#exames_btn').click(function(){
		$('#exames').slideDown()
		$('#hospital, #petshop, #banhoetosa').hide()
		$('a').removeClass('ativo');
		$(this).addClass('ativo');
	});
	$('#banhoetosa_btn').click(function(){
		$('#banhoetosa').slideDown()
		$('#hospital, #petshop, #exames').hide()
		$('a').removeClass('ativo');
		$(this).addClass('ativo');
	});


	//BOTAO_MOBILE
	//MENU
	$('#servicos_hospital_btn_mobile').click(function(){
		$('#hospital_mobile').slideDown()
		$('#petshop_mobile, #exames, #banhoetosa_mobile_mobile').hide()
	});

	$('#servicos_pet_btn_mobile').click(function(){
		$('#petshop_mobile').slideDown()
		$('#hospital_mobile, #exames_mobile, #banhoetosa_mobile').hide()
	});
	$('#servicos_exm_btn_mobile').click(function(){
		$('#exames_mobile').slideDown()
		$('#hospital_mobile, #pet_mobile, #banhoetosa_mobile').hide()
	});

	$('#servicos_banho_btn_mobile').click(function(){
		$('#banhoetosa_mobile').slideDown()
		$('#hospital_mobile, #exames_mobile, #pet_mobile').hide()
	});


	$('#hospital_mobile, #petshop_mobile, #exames_mobile, #banhoetosa_mobile').hide()

	$('#hospital_btn_mobile').click(function(){
		$('#hospital_mobile').slideDown()
	});
	$('#petshop_btn_mobile').click(function(){
		$('#petshop_mobile').slideDown()
	});
	$('#exames_btn_mobile').click(function(){
		$('#exames_mobile').slideDown()
	});
	$('#banhoetosa_btn_mobile').click(function(){
		$('#banhoetosa_mobile').slideDown()
	});


	//INTERNA
	$(".lupa").fancybox({
		helpers : {
			title: {
				type: 'outside'
			},
    }
});

});
