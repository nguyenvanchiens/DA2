$(document).ready(function() {
  load();
  renderProducts();
});

function load(){
   html = '';
   var priceTotal = 0;
   for(let i = 1;i<=100; i++){
      if(localStorage.getItem("idsp"+i)!=null){
   html+= '<tr>';
   html+= '<td class="masp">'+localStorage.getItem("idsp"+i)+'</td>';
   html+= '<td><span class="name">'+localStorage.getItem('namesp'+i)+'</span></td>';
   html+= '<td><img src="'+localStorage.getItem('linksp'+i)+'" alt=""></td>';
   html+= '<td><span class="price">'+localStorage.getItem('pricesp'+i)+' VNĐ</span></td>';
   html+= '<td>';
   html+= '<input type="button" value="-" class="quantitydowncount">';
   html+= '<input type="text" value="'+localStorage.getItem('countsp'+i)+'" min="1" max="100" class="count">';
   html+= '<input type="button" value="+" class="quantityupcount">';
   html+= '<td><span class="edit"><button type="button" class="edit-button"><i class="far fa-edit"></i></span></button></td>';
   html+= '<td><span class="delete"><button type="button" onclick="onDeleteProduct('+i+')"><i class="far fa-trash-alt"></i></span></button></td>';
   html+= '</tr>';
   priceTotal+=Number(localStorage.getItem('pricesp'+i)*localStorage.getItem('countsp'+i));
   
   }
}
   var array = document.getElementById('tbody');
   var total = document.getElementById('totalPrice');
   total.innerHTML=priceTotal+'đ';
   array.innerHTML=html;
}

$(document).ready(function() {
   $('.edit-button').click(function() {
      var id = $(this).parents('.edit').parents('tr');
      var sl = $(id).children('td').children('.count').val();
      var masp = $(id).children('.masp').text();
         if(localStorage.getItem('id'+masp)==masp){
            localStorage.setItem('count'+masp,sl);
            setTimeout(() => {
               $('.title-edit').css('display','block')
           }, 0);
           setTimeout(() => {
               $('.title-edit').css('display','none')
           }, 2000);
           load();
           renderProducts();
         }
        
   })
   
})


$(document).ready(function() {
   $('.quantityupcount').click(function() {
      var id = $(this).parents('td').parents('tr');
      var count = $(id).children('td').children('.quantityupcount');
      var sl = $(id).children('td').children('.count').val();
      $(id).children('td').children('.count').val(Number(sl)+1)
    })
    $('.quantitydowncount').click(function() {
      var id = $(this).parents('td').parents('tr');
      var count = $(id).children('td').children('.quantitydowncount');
      var sl = $(id).children('td').children('.count').val();
      $(id).children('td').children('.count').val(Number(sl)-1)
      if(sl<=1){
         alert('số lượng không được nhỏ hơn 1');
         $(id).children('td').children('.count').val(1);

      }
   })
   
})
//xóa phần tử -----------------------------------------------------------------------------------------
function onDeleteProduct(index){
   deleteProduct(index)
   setTimeout(() => {
      $('.title-delete').css('display','block')
  }, 0);
  setTimeout(() => {
      $('.title-delete').css('display','none')
  }, 2000);

}
function deleteProduct(index){
localStorage.removeItem("linksp"+index)
localStorage.removeItem("namesp"+index)
localStorage.removeItem("countsp"+index)
localStorage.removeItem("pricesp"+index)
localStorage.removeItem("idsp"+index)
load();
renderProducts();  
}

 
