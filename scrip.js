'use strict';

//nhập mail
var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//khai báo regex
const emails = document.querySelector('.email');//khai báo biến email là tag có class email
const infos = document.querySelector('.info');//khai báo biến infos là tag có class info
const btnSubmit = document.querySelector('.submit');//khai báo biến btnSubmit là tag có class submit

function checkEmail() { //gọi hàm tên checkEmail
  var email = document.getElementById('email'); //khai báo biến email có id là email
  
  if (!regex.test(email.value)) { //hàm if có điều kiện kiểm tra xem giá trị của email nhập vào có trong chuỗi ko
    //nếu kiểm tra ra kết quả đúng trả về kq fail và ngược lại
           alert('Hay nhap dia chi email hop le.\nExample@gmail.com');//cảnh báo khi nhập ko đúng định dạng
           email.focus; //lấy tiêu điểm phần tử email
           return false; //trả kết quả false
  }
  else{ 

  infos.classList.remove('hidden'); //loại class hidden ra khỏi class info
  emails.classList.add('hidden'); // thêm class hidden vào lớp email


  } 
}



btnSubmit.addEventListener('click', checkEmail); //chạy hàm khi click chuột vào nút submit

document.addEventListener('keydown', function (e) {//chạy hàm khi ấn enter
  
  if (e.key === 'Enter') {
    if (!info.classList.contains('hiden')) {
      //nếu lớp ìnfo trong các contains ko có lớp hidden thì chạy hàm checkEmail
      checkEmail();
    }
  }
});








var view= document.querySelectorAll('.viewmore');//khai báo biến view là tất cả phần tử có class viewmore
var more = document.querySelectorAll('.view-more');//khai báo biến more là tất cả phần tử có class .view-more
var less = document.querySelectorAll('.view-less');//khai báo biến less là tất cả phần tử có class view-less
var about = document.querySelectorAll('.project-info');//khai báo biến about là tất cả phần tử có class project-info



for (
  let i = 0;
  i < more.length;
  i++ //sử dụng Loops để tạo sự kiện khi click vào các nút
)
view[i].onmousemove = function() {//tạo hàm khi di chuột qua view 
  
  more[i].classList.remove('hidden');//bỏ lớp hidden để hiện nút
};
for (
  let i = 0;
  i < more.length;
  i++ //sử dụng Loops để tạo sự kiện khi click vào các nút
)
 view[i].onmouseleave = function() {//tạo hàm khi di chuotj ra khỏi khối có class view-more
  
  more[i].classList.add('hidden');//thêm lớp hidden để ẩn nút
};
for (
  let i = 0;
  i < more.length;
  i++ //sử dụng Loops để tạo sự kiện khi click vào các nút
)
more[i].onclick = function () {//tạo hàm khi bấm nút view-mmorre
  more[i].classList.add('hide');//thêm lớp hide để ẩn nút view-more
  less[i].classList.remove('hidden');//bỏ lớp hidden để hiện nút view-less
  about[i].classList.remove('hidden');//bỏ lớp hidden để hiện nội dung
};
for (
  let i = 0;
  i < more.length;
  i++ //sử dụng Loops để tạo sự kiện khi click vào các nút
)
less[i].onclick = function () {//tạo hàm khi bấm nút vieew-less
  more[i].classList.remove('hide');//loại lớp ẩn hide
  less[i].classList.add('hidden');//thêm lớp ẩn hiddeen chho nút view-less và phần thông tin
  about[i].classList.add('hidden');
};