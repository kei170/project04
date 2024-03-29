import $ from 'jquery'

$(function(){
  let windowW = $(window).width();
  // console.log(windowW)
  if(windowW > 1160){
    nav()
    submenu()
  }
  else if(windowW < 1159 && windowW >= 980){
    nav()
    submenu()
  }
  else if(windowW < 979 && windowW >= 580){
    tNav()
    gallery()
    
  }
  

  // 공통

  $(window).on('resize',function(e){
    window.location.reload();
  })
})





// web nav
function nav(){
  $('nav li>a').on('click',function(){
    const navA = $(this).attr('href');
    const navB = $(navA).offset().top;
    const headerHeight = $('header').innerHeight();
    $('html,body').animate({scrollTop : navB - headerHeight},800)
    return false;
  })
}
// table, moble nav
function tNav(){
  let navW = $('nav').width();

  // .btn click
  $('header .btn').on('click',function(e){
    $(this).hide();
    $('nav').animate({left:0},400)
  })
  // scrool
  $('nav li>a').on('click',function(){
    const navA = $(this).attr('href');
    const navB = $(navA).offset().top;
    const headerHeight = $('header').innerHeight();
    $('html,body').animate({scrollTop : navB - headerHeight},800)
    $('nav').css('left','-'+navW+'px');
    $('header .btn').show();
    return false;
  })

  // close
  $('nav .close').on('click',function(e){
    $('nav').css('left','-'+navW+'px');
    $('header .btn').show();
  })
}

function submenu(){
  $('aside li>a').on('click',function(e){
    const asideA = $(this).attr('href');
    const asidePos = $('aside').offset().top;
    const headerTop = $('header').innerHeight();
    $('html,body').animate({scrollTop:asidePos - headerHeight});
    return false;
  })
}

function gallery(){
  // 준비하기
  const figureW = $('#box05 #all figure').width();
  $('#all figure:last').prependTo('#all');
  $('#all').css('margin-left','-',+'figureW'+'px')
  // 이벤트
  $('#gallery .prev').on('click',function(e){
    $('#all').animate({marginLeft:'-='+figureW+'px'},400,function(){
      $('#all figure:first').appendTo()
      $('#all').css('margin-left','-'+figureW+'px')
    })
  })
  $('#gallery .next').on('click',function(e){
    $('#all').animate({marginLeft:'+='+figureW+'px'},400,function(){
      $('#all figure:last').prependTo('#all');
      $('#all').css('margin-left','-'+figureW+'px')
    })
  })
}

function FormData(){
  const $liForm = $('#box06 li>input,#box06 li>textarea');
  // console.log($liForm)
  $liForm.removeAttr('placeholder');
    // focus
  $liForm.on('focus',function(e){
    
    $(this).prev('label').fadeOut(300);
  });
    // blur
  $liForm.on('blur',function(e){
    
    let str = $(this).val();
    if(str === ''){
      $(this).prev('label').fadeIn(300);
    }
  });
}


// Dom object > 데이터 정리
const h4 = document.querySelector('#modal h4');
const img = document.querySelector('#modal figure>img');
const day = document.querySelector('#modal dl .year');
const pro = document.querySelector('#modal dl .program');
const url = document.querySelector('#modal dl .link>a');
const content = document.querySelector('#modal dl .text');
// 객체 생성자 함수
function Modal(title,pic,year,program,href,text){
  this.title = title;
  this.pic = pic;
  this.year = year;
  this.program = program;
  this.href = href;
  this.text = text;
}
// console.log(img)
// 메서드
Modal.prototype.action = function(){
  h4.innerHTML = this.title;
  img.setAttribute('src',this.pic);
  day.innerHTML = this.year;
  pro.innerHTML = this.program;
  url.setAttribute('href',this.href);
  url.innerHTML = this.href;
  content.innerHTML = this.text;
}
// 인스턴스
let myModal = [
  new Modal('title1','./images/pic01.png','2022','프로그램1','http://naver.com','내용1'),
  new Modal('title2','./images/pic02.png','2021','프로그램2','http://daum.net','내용2'),
  new Modal('title3','./images/pic03.png','2023','프로그램3','http://nate.com','내용3'),
  new Modal('title4','./images/pic04.png','2024','프로그램4','http://google.com','내용4'),
  new Modal('title5','./images/pic01.png','2025','프로그램5','http://naver.com','내용5'),
  new Modal('title6','./images/pic02.png','2026','프로그램6','http://nate.com','내용6'),
]
// event -> 작업 ->  click -> figure, figure>img, #modal>/close

const open = document.querySelectorAll('#all>figure');
// console.log(open)
const close = document.querySelector('#modal>.close');
// console.log(close)
const modal = document.querySelector('#modal');
// open.onclick -> 첫번쨰 
// open.forEach(function(item,index){
//   item.onclick = function(){
//     modal.style.display = 'block'
//     myModal[index].action();
//   }
// })
// close.onclick = function(){
//   modal.style.display = 'none';
// }




