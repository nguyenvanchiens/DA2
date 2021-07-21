$(document).ready(function() {
    var html = '';
    var string = JSON.parse(localStorage.getItem('dulieu'));
   html+='<div class="col l-5 m-12 c-12">';
   html+='<div class="category-img-wrap">'; 
   html+='<img class="category-img" src="'+string.img+'" alt="">'; 
   html+='</div>'; 
   html+='</div>'; 
   html+='<div class="col l-4 m-12 c-12">'; 
   html+='<div class="product-container">'; 
   html+='<div class="product-name">'; 
   html+='        <p class="name">'+string.name+'</p>'; 
   html+='    </div>'; 
   html+='   <div class="product-price">'; 
   html+='      <p class="price">Giá:'+string.price+'đ</p>'; 
   html+='   </div>'; 
   html+='   <div class="product-info-wrap">'; 
   html+='       <p class="product-info__promotion">'; 
   html+='           Khuyến mại hot nhất :'; 
   html+='       </p>'; 
   html+='       <ul class="product-info__promotion-list">'; 
   html+='           <li class="product-info__promotion-item">'; 
   html+='                 <i class="fas fa-gift"></i> Miễn phí thức ăn lớn trong hôm nay'; 
   html+='            </li>'; 
   html+='            <li class="product-info__promotion-item">'; 
   html+='                 <i class="fas fa-gift"></i> Giftcard lên tới 100k'; 
   html+='            </li>'; 
   html+='            <li class="product-info__promotion-item">'; 
   html+='                  <i class="fas fa-gift"></i> phiếu mua hàng trị giá 50K'; 
   html+='            </li>'; 
   html+='        </ul>'; 
   html+='     </div>'; 
   html+='     <div class="product-buying-wap">';  
   html+='         Số lượng: <input type="number" min="1" value="1" max="20" style="width:100px;height: 30px;" id="number-buying">';  
   html+='       <button type="button" class="product-buying"><i class="fas fa-shopping-cart"></i>MUA HÀNG NGAY</button>';  
   html+='    </div>';  
   html+='    <div class="product-info__contact-wrap">';  
   html+='        <a href="" class="product-info__contact-link"><i class="fas fa-phone-alt"></i>0986.989.626</a>';  
   html+='         <a href="https://www.facebook.com/profile.php?id=100004895267775" class="product-info__contact-link"><i class="fab fa-facebook"></i>Chat qua facebook</a>';  
   html+='     </div>';  
   html+='     <div class="product-info__SocialNetwork">';  
   html+='        <a href="" class="product-info__SocialNetwork-link"><i class="fab fa-facebook product-info__SocialNetwork-icon"></i></a>';  
   html+='         <a href="" class="product-info__SocialNetwork-link"><i class="fab fa-twitter-square product-info__SocialNetwork-icon"></i></a>';  
   html+='        <a href="" class="product-info__SocialNetwork-link"><i class="far fa-envelope product-info__SocialNetwork-icon"></i></a>';  
   html+='        <a href="" class="product-info__SocialNetwork-link"><i class="fas fa-podcast product-info__SocialNetwork-icon"></i></a>';  
   html+='         <a href="" class="product-info__SocialNetwork-link"><i class="fab fa-google product-info__SocialNetwork-icon"></i></a>';  
   html+='    </div>';  
   html+='  </div>';  
   html+='</div>';  
   html+='<div class="col l-3">';  
   html+=' <aside class="category hide-on-mobile-table">';  
   html+='    <div class="category-heading">';  
   html+='         <h3 class="category-heading-text"><i class="fas fa-bars category-heading-icon"></i>Danh mục sản phẩm</h3>';  
   html+='    </div>';  
   html+='    <ul class="category-list">';  
   html+='        <li class="category-item">';  
   html+='            <a href="chocung.html" class="category-item__link category-item__link--active"><i class="fas fa-angle-double-right category-item__icon"></i>Chó cưng</a>';  
   html+='        </li>';  
   html+='         <li class="category-item">';  
   html+='            <a href="chuongnuoi.html" class="category-item__link"><i class="fas fa-angle-double-right category-item__icon"></i>Chuồng nuôi</a>';  
   html+='        </li>';  
   html+='        <li class="category-item">';  
   html+='            <a href="dichvu.html" class="category-item__link"><i class="fas fa-angle-double-right category-item__icon"></i>Dịch vụ thú cưng</a>';  
   html+='        </li>';  
   html+='        <li class="category-item">';  
   html+='           <a href="gamnham.html" class="category-item__link"><i class="fas fa-angle-double-right category-item__icon"></i>Gặm nhấm</a>';  
   html+='        </li>';  
   html+='        <li class="category-item">';  
   html+='             <a href="meocung.html" class="category-item__link"><i class="fas fa-angle-double-right category-item__icon"></i>Mèo cưng</a>';  
   html+='        </li>';  
   html+='         <li class="category-item">';  
   html+='            <a href="" class="category-item__link"><i class="fas fa-angle-double-right category-item__icon"></i>Sẳn phẩm giảm giá</a>';  
   html+='         </li>';  
   html+='        <li class="category-item">';  
   html+='            <a href="" class="category-item__link"><i class="fas fa-angle-double-right category-item__icon"></i>Sói cảnh</a>';  
   html+='        </li>';  
   html+='        <li class="category-item">';  
   html+='            <a href="chuongnuoi.html" class="category-item__link"><i class="fas fa-angle-double-right category-item__icon"></i>Vật dụng thú cưng</a>';  
   html+='        </li>';  
   html+='    </ul>';  
   html+='</aside>';  
   html+='</div> ';    
   console.log(string);
   document.getElementById('wrap-deltai').innerHTML=html;
   $('.product-buying').click(function() {
    var sl = $('#number-buying').val();
       if(string.id==localStorage.getItem('id'+string.id)){
       
        var countid = localStorage.getItem('count'+string.id);
        localStorage.setItem('count'+string.id,Number(sl)+Number(countid));
        setTimeout(() => {
            $('.title-pay').css('display','block')
        }, 0);
        setTimeout(() => {
            $('.title-pay').css('display','none')
        }, 2000);
        renderProducts();
       }
       else{
        localStorage.setItem("link"+string.id,string.img)
        localStorage.setItem("name"+string.id,string.name)
        localStorage.setItem("count"+string.id,sl)
        localStorage.setItem("price"+string.id,string.price)
        localStorage.setItem("id"+string.id,string.id);  
        setTimeout(() => {
            $('.title-pay').css('display','block')
        }, 0);
        setTimeout(() => {
            $('.title-pay').css('display','none')
        }, 2000);
        renderProducts();
       }
   })
}) 
