   $(function() {
       function fn2(city) {
           $("#destination1").val(city);
       }

       $("#destination1").click(function() {
           $('#mengban2').css('display', 'block');
           citypicker.show({
               selected: fn2
           });
       });
       
       $("#mengban2").click(function() {
           $("#div_select_city_sub_menu").hide();
           $("#ui-datepicker-div").hide();
           $("#mengban2").css("display", "none");
       });
     
     function fn3(city) {
           $("#destination2").val(city);
       }

       $("#destination2").click(function() {
           $('#mengban2').css('display', 'block');
           citypicker.show({
               selected: fn3
           });
       });
       
       $("#mengban2").click(function() {
           $("#div_select_city_sub_menu").hide();
           $("#ui-datepicker-div").hide();
           $("#mengban2").css("display", "none");
       });
   });
