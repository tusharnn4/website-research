function submitToAPI(e) {
       e.preventDefault();
       var URL = "https://3rb5hn9ycc.execute-api.eu-west-1.amazonaws.com/Prod/contact-us";

            var Nametes = /[A-Za-z]{1}[A-Za-z]/;
            if (!Nametes.test($("#name-input").val())) {
                         alert ("Name can not less than 2 char");
                return;
            }
            var Nametes = /[0-9]{10}/;
            if (!Nametes.test($("#phone-input").val())) {
                alert ("Please enter valid mobile number");
                return;
            }
            if ($("#email-input").val()=="") {
                alert ("Please enter your email id");
                return;
            }

            var emailtes = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            if (!emailtes.test($("#email-input").val())) {
                alert ("Please enter valid email address");
                return;
            }

       var name = $("#name-input").val();
       var phone = $("#phone-input").val();
       var email = $("#email-input").val();
       var desc = $("#description-input").val();
       var data = {
          name : name,
          phone : phone,
          email : email,
          desc : desc
        };

       $.ajax({
         type: "POST",
         url : "https://3rb5hn9ycc.execute-api.eu-west-1.amazonaws.com/Prod/contact-us",
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),

         
         success: function () {
           // clear form and show a success message
           alert("Successful");
           document.getElementById("contact-form").reset();
       location.reload();
         },
         error: function () {
           // show an error message
           alert("UnSuccessfull");
         }});
     }
