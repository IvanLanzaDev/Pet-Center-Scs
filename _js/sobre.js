$(document).ready(function(){
	
	$('input').focus(function(){ if($(this).val() == $(this).attr('rel')) $(this).val(''); });
    $('input').blur(function(){ if($(this).val() == '') $(this).val($(this).attr('rel')); });
    $('textarea').focus(function(){ if($(this).val() == $(this).attr('rel')) $(this).val(''); });
    $('textarea').blur(function(){ if($(this).val() == '') $(this).val($(this).attr('rel')); });


    $('.fcontato').submit(function(e){ 
        e.preventDefault();
		var msg = '';
		if($(this).find('#nome').val() == '' || $(this).find('#nome').val() == 'Nome'){
			msg += 'Preencha o campo Nome'+"\n"
		}

		if($(this).find('#email').val() == '' || $(this).find('#email').val() == 'E-mail'){
			msg += 'Preencha o campo E-mail'+"\n"
		}

		if($(this).find('#mensagem').val() == '' || $(this).find('#mensagem').val() == 'Mensagem'){
			msg += 'Preencha o campo Mensagem'+"\n"
		}


		if(msg == ''){

			var data = $(this).serialize();
			$.post( "_php/envia.php", data, function( data ) {
				$( ".result" ).html( data );
				$(this).reset();
			});
		}else{
			alert(msg)
		}
        
    });
	
	

});	