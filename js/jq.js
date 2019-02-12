$(document).ready(function() {
   $(".main-slider").slick({
      autoplay: true,
      autoplaySpeed: 400000,
      pauseOnHover: true,
      dots: true,
      infinite: true,
   });

   // $(".panel__heading").click(function() {
   //    //$(".toggle").toggleClass('active');
   //    $(".close-toggle").toggleClass('active');
   //    $(".open-toggle").toggleClass('active');
   // })
   var collpanel = document.getElementsByClassName("panel__heading");
   var i;
   for (i = 0; i < collpanel.length; i++) {
      collpanel[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var collContent = this.nextElementSibling; //--> chính là element ('panel__content') tiếp theo ngay sau element ("panel__heading")
         if (collContent.style.maxHeight) { //hiện tại Nếu đã có độ dài rồi thì khi kích sẽ về null
            collContent.style.maxHeight = null;
            collContent.style.borderTop = "1px solid transparent"

         } else { // hiện tại nếu chưa có độ dài thì kích sẽ có max height được set 
            collContent.style.maxHeight = collContent.scrollHeight + "px";
            collContent.style.borderTop = "1px solid #ddd"
         }
      });
   }

   $(".toogle-btn").click(function() {
      $(".menu__mobile").css("width", "100%");
      $(".menu__mobile li").css("display", "block");
      $(".closebtn").css("display", "block");
   });

   $(".closebtn").click(function() {
      $(".menu__mobile").css("width", "0");
      $(".menu__mobile li").css("display", "none");
      $(".closebtn").css("display", "none");
   });
});