/**
 * Created by Pauly on 26.07.2017.
 */
(function (){
    'use strict';
    $(document).ready(function () {
       $('.like-message').click(function () {
           alert("Pressed a like button!");
           var request = $.ajax({
               url: "http://127.0.0.1:8000/like/",
               method:"POST",
               data:{id:$(this).attr("data-messageid"),
               like:1
               }
           });
           request.done(function () {
               alert("SUCCESS!");

           });
           request.fail(function () {
               alert("FAILL!");
           });

       }) ;
       $('.dislike-message').click(function () {
           alert("Pressed a dislike button!")
            var request = $.ajax({
               url: "http://127.0.0.1:8000/like/",
               method:"POST",
               data:{id:$(this).attr("data-messageid"),
               like:0
               }
           });
           request.done(function () {
               alert("SUCCESS!");

           });
           request.fail(function () {
               alert("FAILL!");
           });
       });
    });
})();

