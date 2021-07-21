var i=0;
var images=[];
var time=3000;
//img list

function change(){
    
}
window.onload=change;
setInterval(change, time);

//code phần load trang web
$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	// $('.load').delay(1000).fadeOut('fast');
    $('.loader').delay(300).fadeOut('fast');
    
});

$(document).ready(function() {
    $(window).scroll(function(event) {
       var pos_body = $('html,body').scrollTop();
       // console.log(pos_body);
       if(pos_body>20){
          $('.header__search').addClass('co-dinh-menu');
       }
       else {
          $('.header__search').removeClass('co-dinh-menu');
       }
       if(pos_body>800){
          $('.back-to-top').addClass('hien-ra');
       }
       else{
          $('.back-to-top').removeClass('hien-ra');
       }
    });
    $('.back-to-top').click(function(event) {
       $('html,body').animate({scrollTop: 0},1400);
    });
 });



$(document).ready(function() {
    renderProducts();
    
})


//thêm sản phẩm------------------------------------------------------------------------------------------------

function renderProducts() {
    var html = '';
    var totalMoney = 0;
    for(var i=0;i<100;i++){
        if(localStorage.getItem("linksp"+i)!==null){
       html+= '<li class="header__cart-notify-item">';
                                               html+= '<a href="" class="header__cart-notify-item-link"><img src="'+localStorage.getItem("linksp"+i)+'" alt="" class="header__cart-img"></a>';
                                                html+='<div class="header__cart-item-info">';
                                                    html+='<div class="header__cart-item-head">';
                                                        html+='<h5 class="header__cart-item-name">'+localStorage.getItem("namesp"+i)+'</h5>';
                                                        html+= '<div class="header__cart-item-price-wrap">';
                                                        html+= '<p class="header__cart-item-price">Số lượng: <span id="count-product"><b><span>'+localStorage.getItem("countsp"+i)+'</span></b></span></p>';
                                                        html+='<span>Tổng Giá: </span>'
                                                        html+='<span class="header__cart-item-qnt">'+localStorage.getItem("pricesp"+i)*localStorage.getItem('countsp'+i)+'</span>'
                                                        html+='<span>đ</span>'
                                                        html+= '</div>';
                                                        html+= '</div>';
                                                        html+= '</div>';
                                                        html+= '<i href="" class="header__cart-notify-item-remove" onclick="onDeleteProduct('+i+')">x</i>';
                                                        html+= '</li>'; 
                                                        var pri =Number(localStorage.getItem("pricesp"+i))*localStorage.getItem("countsp"+i);
                                                        totalMoney+=pri;
    }
    
    $('.header__cart-pays-price').text(totalMoney+'đ');
    var notifysElemnt = document.getElementById('lisst');
    notifysElemnt.innerHTML=html;  
}
}
const Products = [];
var temp = {};

$(".product-items").each(function () {
    temp = {
        id: $(this).attr("id"),
        img: $(this).children(".product-item-img").children("img").attr("src"),
        name: $(this).children(".product-item-detail").children('.product-item-detail__link').children(".product-name").text(),
        price: $(this).children(".product-item-detail").children('.product-item-detail__link').children('.product-item-price-wrap').children('.product-item-price-new').text(),
        count: 1,
    };
    Products.push(temp);
}); 
//load dữ liệu admin
$(document).ready(function() {

    localStorage.setItem('dulieudoadmin',JSON.stringify(Products));
})




//load giá lên -----------------------------------------------------------------------------------------


//xóa phần tử -----------------------------------------------------------------------------------------
function onDeleteProduct(index){
    debugger
        deleteProduct(index)
        renderProducts();
        setTimeout(() => {
            $('.title-delete').css('display','block')
        }, 0);
        setTimeout(() => {
            $('.title-delete').css('display','none')
        }, 2000);
}
function deleteProduct(index){
    debugger
    localStorage.removeItem("linksp"+index)
    localStorage.removeItem("namesp"+index)
    localStorage.removeItem("countsp"+index)
    localStorage.removeItem("pricesp"+index)
    localStorage.removeItem("idsp"+index)
    renderProducts();  
}


$('.add-to-cart').off('click').on('click',function() {   
debugger
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

function setlocal(gt,bien){
    localStorage.setItem(gt,bien);
    renderProducts();
}

//code phần hiện detal
//code phần modal cho mua sản phẩm*/
$(document).ready(function() {
   
    $('.product-quick-view__link').off('click').on('click',function() {
        debugger
        var clss = $(this).parents('.qroduct-quick-view').parents('.product-quick-view__wrap').parents('.product-quick-view').parents('.product-items');
        var id = $(this).parents('.qroduct-quick-view').parents('.product-quick-view__wrap').parents('.product-quick-view').parents('.product-items').attr('id');
        var link = $(clss).children(".product-item-img").children(".section-favourite-pet__img").attr("src");
        var NameProduct = $(clss).children('.product-item-detail').children('.product-item-detail__link').children('.product-item-name').text();
        var Count = 1;
        var Price =$(clss).children('.product-item-detail').children('.product-item-detail__link').children('.product-item-price-wrap').children('.product-item-price-new').text();
        var Price1 =$(clss).children('.product-item-detail').children('.product-item-detail__link').children('.product-item-price-wrap').children('.product-item-price-old').text();
    var html = "";
    html+='<div class="detail-img">';
    html+='                         <a href=""><img src='+link+' alt=""></a> ';
    html+='                     </div>';
    html+='                     <div class="content">';
    html+='                         <div class="product-name">';
    html+='                             <p>'+NameProduct+'</p>';
    html+='                         </div>';
    html+='                         <div class="product-price">';
    html+='                             <div class="price">';
    html+='                             <span class="price-old">'+Price1+'</span>';
    html+='                             <span class="price-new">'+Price+'</span><span style="color: var(--primary-color);">đ</span>';
    html+='                             </div>';
    html+='                             <span class="count-product"><i class="fas fa-box-open"></i>còn hàng</span>';
    html+='                         </div>';
    html+='                         <div class="add">';
    html+='                             <div class="quantity">';
    html+='                                 <input type="button" value="-" class="quantitydown">';
    html+='                                 <input type="text" value="1" min="1" max="100" class="quantity-number">';
    html+='                                 <input type="button" value="+" class="quantityup">';
    html+='                             </div> ';
    html+='                             <button type="submit" id="add-buying" class="buying"><i class="fas fa-shopping-cart"></i>MUA HÀNG NGAY</button>';
    html+='                         </div>';
    html+='                         <div class="product-description">';
    html+='                             <p>thú cưng siêu đẹp siêu dễ thương đẹp mê li kp nghĩ';
    html+='                                 về thú cưng đâu tin tôi đi nha';
    html+='                                 được nhập ở nơi uy tín chất lượng giá cả thì kp bàn cãi còn chờ gì nữa ';
    html+='                                 mà không mang em nó về nhà';
    html+='                             </p>';
    html+='                         </div>';
    html+='                         <div class="introduct">';
    html+='                             <p>mua thì còn k mua thì mất ráng chịu nha bà con ơi hàng về 1 lần 1 ngày';
    html+='                                 không mua hôm nay mai lại đến e mua';
    html+='                             </p>';
    html+='                         </div>';
    html+='                     </div>';
    html+='                 </div>';
    
    document.getElementById('detail-wrap').innerHTML=html;
    $('.product-quick-view__link').click(function() {
             $('.detail').css('display','block');
             $('.overlay').css('display','block');
     })
         $('.overlay').click(function() {
             $('.detail').css('display','none');
             $('.overlay').css('display','none');
         })
         $('.quantitydown').click(function() {
            var number = $('.quantity-number').val();
            if($('.quantity-number').val()==1){
                alert("không thể nhỏ hơn 1");
            }
            else{
                $('.quantity-number').val(number-1)
                var number1 = Number($('.quantity-number').val());
            }
        })
        $('.quantityup').click(function() {
            var number = Number($('.quantity-number').val());
            $('.quantity-number').val(number+1);
            
        })
        $('.buying').click(function() {
            var slval = $('.quantity-number').val();
            if(localStorage.getItem('id'+id)==id){
                var sl = localStorage.getItem('count'+id);
                localStorage.setItem('count'+id,Number(sl)+Number(slval));
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
                    setlocal("count"+id,slval)
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
})


/*code phần đăng nhập đăng ký*/
$(document).ready(function() {
    $('.header__top-item-link--login').off('click').on('click',function() {
        $('.login').css('display','block');
        $('.overlay').css('display','block');
    })
    $('.overlay').off('click').on('click',function() {
        $('.login').css('display','none');
        $('.overlay').css('display','none');
        $('.registration').css('display','none');
    })
    $('.registration__link').off('click').on('click',function() {
        $('.registration').css('display','block');
        $('.overlay').css('display','block');
        $('.login').css('display','none');
    })
    $('.login__link').off('click').on('click',function() {
        $('.registration').css('display','none');
        $('.overlay').css('display','block');
        $('.login').css('display','block');
    })
})
console.log(Products);
//code phần trang chi tiết sản phẩm
$('.product-item-detail__link').click(function() {
    var clss = $(this).parents('.product-item-detail').parents('.product-items');
    var id = $(this).parents('.product-item-detail').parents('.product-items').attr('id');
    var link = $(clss).children(".product-item-img").children(".section-favourite-pet__img").attr("src");
    var NameProduct = $(clss).children('.product-item-detail').children('.product-item-detail__link').children('.product-item-name').text();
    var Count = 1;
    var Price =$(clss).children('.product-item-detail').children('.product-item-detail__link').children('.product-item-price-wrap').children('.product-item-price-new').text();
    for(var i =0;i<Products.length;i++){
        if(Products[i].id==id){
           localStorage.setItem('dulieu',JSON.stringify(Products[i]));
        }
    }
})

//code phần tìm kiếm cho webside

$(document).ready(function() {
    $('.header__btn').off('click').on('click',function() {
        var text = $('.header__input').val();
        var array = {};
        var produtsnew = [];
        for(var i=0;i<Products.length;i++){
            if(Products[i].name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase())!=-1){
                array={
                    id:Products[i].id,
                    img:Products[i].img,
                    name:Products[i].name,
                    price:Products[i].price
                }
                // array = [Products[i].id,Products[i].img,Products[i].name,Products[i].price];
                 produtsnew.push(array);
            }
        }
        console.log(produtsnew);
        localStorage.setItem('search',JSON.stringify(produtsnew));
    })
})
$(document).ready(function() {
    $('.header__input').click(function() {
        $('.header__search-history').css('display','block');
    })
    $('.header__search-history').click(function() {
        $('.header__search-history').css('display','none');
    })
})



