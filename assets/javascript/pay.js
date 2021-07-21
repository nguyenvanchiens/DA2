function render(){
    var html = '';
    var priceTotal = 0;
    for(let i=0;i<100;i++){
        if(localStorage.getItem("idsp"+i)!=null){
           html+='<tr>';
           html+='<td>'+localStorage.getItem('idsp'+i)+'</td>';
           html+='<td>';
           html+='<div class="img-product">';
           html+='<img src="'+localStorage.getItem('linksp'+i)+'" alt="">';
           html+='</div> ';
           html+=' </td>';
           html+='<td><span class="count">'+localStorage.getItem('countsp'+i)+'</span></td>';
           html+='<td><div class="price">'+localStorage.getItem('pricesp'+i)*localStorage.getItem('countsp'+i)+'đ</div></td>';
           html+='</tr>';
           priceTotal+=Number(localStorage.getItem('pricesp'+i)*localStorage.getItem('countsp'+i));
        }
    }
    var array = document.getElementById('tbody');
   var total = document.getElementById('totalPrice');
   total.innerHTML=priceTotal+'đ';
   array.innerHTML=html;
}


$(document).ready(function() {
    render();
    renderProducts();
    $('.content-footer__link').off('click').on('click',function() {
        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var address = $('#address').val();
        var category = $('#category').val();
        var city = $('#city').val();
        var District = $('#District').val();
        var ward = $('#ward').val();
        if(name==''||phone==''||email==''||address==''||category==''||city==''||District==''||ward=='')
        {
            alert("mời bạn điền đủ thông tin");
        }
        else{
            localStorage.clear();
            renderProducts(); 
            render();
            alert("cám ơn bạn đã ủng hộ mua hàng ở cửa hàng chúng tôi");
        }
    })
})