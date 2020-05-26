function isEnglish(elem){
    return !/[^a-z]/i.test(elem);
}

function validateEmail(address) {
   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   return reg.test(address);
}


$(document).ready(function () {

  $("#name").on("change", function () {
    if (isEnglish($("#name").val())) {
        $("#name").addClass("green")
        .removeClass("red");
          $(".incorrect").hide();
    }
    else {
        $("#name").addClass("red")
        .removeClass('green');
         this.parentElement.querySelector('.incorrect').style.display="inline";
    }
  });

  $("#email").on("change", function () {
    if (validateEmail($("#email").val())) {
        $("#email").addClass("green")
        .removeClass("red");
          $(".incorrect").hide();
    }
    else {
        $("#email").addClass("red")
        .removeClass('green');
         this.parentElement.querySelector('.incorrect').style.display="inline";
    }
  });

  $("#message").on("change", function () {
    if (isEnglish($("#message").val())) {
        $("#message").addClass("green")
        .removeClass("red");
          $(".incorrect").hide();
    }
    else {
        $("#message").addClass("red")
        .removeClass('green');
         this.parentElement.querySelector('.incorrect').style.display="inline";
    }
  });

  $(".form").on("submit", (e) => {
    if ($(".red").length!==0 ) {
        e.preventDefault();
        console.log("form is not send");
    }
    else {
      e.preventDefault();
      let dataToSend = {};
      const inputs = $("[data-name]");

      inputs.each((key, item) => {
        dataToSend[$(item).data("name")] = $(item).val();
      });

      console.log(dataToSend);

      $.ajax({
        url: "https://anyurl.con",
        type: "POST",
        beforeSend: () => {

        },
        complete: () => {

        },
        contentType: "application/json",
        data: JSON.stringify(dataToSend),
        success: () => {
          alert(1);
        },
        error: () => {
          alert(0);
        }
      });
    }


  });

});
