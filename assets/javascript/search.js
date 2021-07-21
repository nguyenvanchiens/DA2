$(document).ready(function() {
   loadchitiet();
})
function loadchitiet(){
   html ='';
   var dulieu = localStorage.getItem('search');
   var dulieunew = JSON.parse(dulieu);
   for(var i=0;i<dulieunew.length;i++){
      html+='<div class="col l-3 m-4 c-6 ">';
      html+='<div class="product-items" id="'+dulieunew[i].id+'">';
      html+='<div class="product-item-img">';
      html+='<img src="'+dulieunew[i].img+'" alt="" class="section-favourite-pet__img">';
      html+='<p class="product-item-img__text active-text">';
     
      html+='</p>';
      html+='</div>';
      html+='<div class="product-quick-view">';
      html+='<div class="product-quick-view__wrap">';
      html+='<div class="qroduct-quick-view">';
      html+='<a href="##" class="product-quick-view__link">XEM THÊM</a>';
      html+='</div>';
      html+='<div class="add-cart">';
      html+='<span  class="add-to-cart" id="'+dulieunew[i].id+'"><i class="fas fa-shopping-cart add-cart-icon" title="ADD TO CART"></i></span>';
      html+='</div>';
      html+='</div>';
      html+='</div>';
      html+='<div class="product-item-detail">';
      html+='<a href="chitiet.html" class="product-item-detail__link">';
      html+='<p class="product-item-name product-name">'+dulieunew[i].name+'</p>';
      html+='<div class="product-item-price-wrap">';
      html+='<span class="product-item-price-old">600.000đ</span>';
      html+='<span class="product-item-price-new">'+dulieunew[i].price+'</span>';
      html+='</div>';
      html+='<div class="product-item__rating">';
      html+='<i class="product-item__star--goldfas fas fa-star"></i>';
      html+='<i class="product-item__star--goldfas fas fa-star"></i>';
      html+='<i class="product-item__star--goldfas fas fa-star"></i>';
      html+='<i class="product-item__star--goldfas fas fa-star"></i>';
      html+='<i class="fas fa-star"></i>';
      html+='</div>';
      html+='</a>';
      html+='</div>';                                 
      html+='</div>';                                                 
      html+='</div>';
   }
   document.getElementById('wrap-product').innerHTML=html;
}


$(document).ready(function() {
   $('.add-to-cart').off('click').on('click',function() {   
      var clss = $(this).parents('.add-cart').parents('.product-quick-view__wrap').parents('.product-quick-view').parents('.product-items');
      var id = $(this).parents('.add-cart').parents('.product-quick-view__wrap').parents('.product-quick-view').parents('.product-items').attr('id');
      var link = $(clss).children(".product-item-img").children(".section-favourite-pet__img").attr("src");
      var NameProduct = $(clss).children('.product-item-detail').children('.product-item-detail__link').children('.product-item-name').text();
      var Count = 1;
      var Price =$(clss).children('.product-item-detail').children('.product-item-detail__link').children('.product-item-price-wrap').children('.product-item-price-new').text();
      if(localStorage.getItem('id'+id)==id){
         var sl = localStorage.getItem('count'+id);
         localStorage.setItem('count'+id,Number(sl)+1);
         setTimeout(() => {
             $('.title-pay').css('display','block')
         }, 0);
         setTimeout(() => {
             $('.title-pay').css('display','none')
         }, 2000);
         renderProducts();
     }
     else{
             setlocal("link"+id,link)
             setlocal("name"+id,NameProduct)
             setlocal("count"+id,Count)
             setlocal("price"+id,Price)
             setlocal("id"+id,id); 
             setTimeout(() => {
                 $('.title-pay').css('display','block')
             }, 0);
             setTimeout(() => {
                 $('.title-pay').css('display','none')
             }, 2000);
         }             
   })
})
