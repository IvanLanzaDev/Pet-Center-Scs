// JavaScript Document
jQuery(document).ready(function() {
	
	//BOX LOGIN
	$('#box_login, #login_fechar ,#box_login_mobile, #login_fechar_mobile').hide()

	$('#login').click(function(){
		$('#box_login').show();
		$('#login_fechar').show();
		$('#login').hide()
	});
	
	$('#login_fechar').click(function(){
		$('#box_login').hide()
		$('#login_fechar').hide()
		$('#login').show();
	});
	
	
	$('#login_mobile').click(function(){
		$('#box_login').show();
		$('#login_fechar_mobile').show();
		$('#login_mobile').hide()
	});
	
	$('#login_fechar_mobile').click(function(){
		$('#box_login').hide()
		$('#login_fechar_mobile').hide()
		$('#login_mobile').show();
	});
	
	//Login
	$('#saobernardo').hide()
	
	$('#santoandre_bnt').click(function(){
		$('#saobernardo').hide()
		$('#santoandre').show();
		$('a').removeClass('selecionado');
		$(this).addClass('selecionado');
	});
	
	$('#saobernardo_bnt').click(function(){
		$('#santoandre').hide()
		$('#saobernardo').show();
		$('a').removeClass('selecionado');
		$(this).addClass('selecionado');
	});
	
	 
	
});