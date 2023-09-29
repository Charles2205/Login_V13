(function($){"use strict";$('.input100').each(function(){$(this).on('blur',function(){if($(this).val().trim()!=""){$(this).addClass('has-val');}
else{$(this).removeClass('has-val');}})})
$('.validate-input .input100').each(function(){$(this).on('blur',function(){if(validate(this)==false){showValidate(this);}
else{$(this).parent().addClass('true-validate');}})})
var input=$('.validate-input .input100');$('.validate-form').on('submit',function(){var check=true;for(var i=0;i<input.length;i++){if(validate(input[i])==false){showValidate(input[i]);check=false;}}
return check;});$('.validate-form .input100').each(function(){$(this).focus(function(){hideValidate(this);$(this).parent().removeClass('true-validate');});});function validate(input){if($(input).attr('type')=='email'||$(input).attr('name')=='email'){if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)==null){return false;}}
else{if($(input).val().trim()==''){return false;}}}
function showValidate(input){var thisAlert=$(input).parent();$(thisAlert).addClass('alert-validate');}
function hideValidate(input){var thisAlert=$(input).parent();$(thisAlert).removeClass('alert-validate');}})(jQuery);



    document.querySelector('.login100-form-btn').addEventListener('click', () => {
      Swal.fire({
        title: 'Hello from SweetAlert!',
        text: 'This is a SweetAlert integration with Node.js.',
        icon: 'success',
      });
    });
    try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `username=${username}&password=${password}`,
        });
  
        if (response.ok) {
          // Sign-up was successful
          Swal.fire({
            title: 'Success!',
            text: 'Sign-up was successful.',
            icon: 'success',
          });
        } else {
          // Sign-up failed
          Swal.fire({
            title: 'Error!',
            text: 'Sign-up failed. Please try again.',
            icon: 'error',
          });
        }
      } catch (error) {
        console.error('Error:', error);
      }