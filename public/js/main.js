
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);


async function signIn(user_name, password) {
    try {
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_name, password }),
      });
  
      if (!response.ok) {
        // Display an error message using SweetAlert if the sign-in fails
        const data = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Sign-in Failed',
          text: data.message || 'Something went wrong during sign-in.',
        });
        return;
      }
  
      const data = await response.json();
      // Handle a successful sign-in response (e.g., store authentication token)
      console.log(data);
  
      // Display a success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Sign-in Successful',
        text: 'You have successfully signed in!',
      });
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
  
      // Display a generic error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while processing your request.',
      });
    }
  }
  
  // Call the signIn function with username and password
  signIn('your_username', 'your_password');
  