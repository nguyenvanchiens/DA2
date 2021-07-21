$(document).ready(function() {
     $('.header-aside-item__link1').off('click').on('click',function() {
        $('.sub-menu-list1').toggleClass("show");
        $('.header-aside-item__icon-next').toggleClass('rote');
     })
     $('.header-aside-item__link2').off('click').on('click',function() {
        $('.sub-menu-list2').toggleClass("show");
        $('.header-aside-item__icon-next').toggleClass('rote');
     })
     $('.header-aside-item__link3').off('click').on('click',function() {
        $('.sub-menu-list3').toggleClass("show");
        $('.header-aside-item__icon-next').toggleClass('rote');
     })
     $('.header-aside-item__link4').off('click').on('click',function() {
      $('.sub-menu-list4').toggleClass("show");
      $('.header-aside-item__icon-next').toggleClass('rote');
   })
})
var string = JSON.parse(localStorage.getItem('dulieudoadmin'));
console.log(string);
$(document).ready(function() {
    show();
    $('.btn-show-more').click(function() {
      showmore();
    })
    $('.btn-show-less').click(function() {
      show();
    })
})
function show(){
   var html = '';
   for(var i=0;i<string.length-11;i++){

      html+='<tr>';
      html+='<td class="masp">'+string[i].id+'</td>';
      html+='<td class="tensp">'+string[i].name+'</td>';
      html+='<td class="imgsp"><img src="'+string[i].img+'" alt="" style="width:70px"></td>';
      html+='<td class="pricesp">'+string[i].price+'<span>đ</span></td>';
      html+='<td class="countsp">'+string[i].count+'</td>';
      html+='<td><button type="button" class="btn-edit"><i class="fas fa-edit"></i></button></td>';
      html+='<td><button type="button" class="btn-delete"><i class="far fa-trash-alt"></i></button></td>';
      html+='</tr>';
   }
   document.getElementById('tbody').innerHTML=html;
}
function showmore(){
   var html = '';
   for(var i=0;i<string.length;i++){

      html+='<tr>';
      html+='<td class="masp">'+string[i].id+'</td>';
      html+='<td class="tensp">'+string[i].name+'</td>';
      html+='<td class="imgsp"><img src="'+string[i].img+'" alt="" style="width:70px"></td>';
      html+='<td class="pricesp">'+string[i].price+'<span>đ</span></td>';
      html+='<td class="countsp">'+string[i].count+'</td>';
      html+='<td><button type="button" class="btn-edit"><i class="fas fa-edit"></i></button></td>';
      html+='<td><button type="button" class="btn-delete"><i class="far fa-trash-alt"></i></button></td>';
      html+='</tr>';
   }
   document.getElementById('tbody').innerHTML=html;
}

$(document).ready(function() {
   $('#input-search').on('keyup', function(event) {
      event.preventDefault();
      /* Act on the event */
      var tukhoa = $(this).val().toLowerCase();
      $('#tbody tr').filter(function() {
         $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa)>-1);
      });
   });
});

