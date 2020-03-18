// JavaScript Document
jQuery(document).ready(function() {
	

	$('#mapa1_btn').click(function(){
		$('#mapa1').show();
		$('#mapa2').hide();
		$('a').removeClass('mapa_ativo');
		$(this).addClass('mapa_ativo')
	});
	
	$('#mapa2_btn').click(function(){
		$('#mapa2').show();
		$('#mapa1').hide();
		$('a').removeClass('mapa_ativo');
		$(this).addClass('mapa_ativo')
	});
	
	//mobile
	
	$('#mapa1_btn_mobile').click(function(){
		$('#mapa1_mobile').show();
		$('#mapa2_mobile').hide();
		$('a').removeClass('mapa_ativo');
		$(this).addClass('mapa_ativo')
	});
	
	$('#mapa2_btn_mobile').click(function(){
		$('#mapa2_mobile').show();
		$('#mapa1_mobile').hide();
		$('a').removeClass('mapa_ativo');
		$(this).addClass('mapa_ativo')
	});
	
});