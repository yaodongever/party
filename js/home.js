/*刘艳东*/
$(function(){
    $("#play").carousel();
   var buttons=$("#small").getElementsByTagName("img");
   var index=1;
   function buttonsShow(){
       for(var i=0;i<buttons.length;i++){}
       if(buttons[i].className=='on'){
           buttons[i].className=''
       }
   }
   buttons[index-1].className='on';
   prev.onclick=function(){
       index--;
       if(index<1){
           index=11;
       }
       buttonsShow();
       animate(1366);
   }
   next.onclick=function(){
       index++;
       if(index>11){
           index=1;
       }
       buttonsShow();
       animate(-1366);
   }
   for(var i=0;i<buttons.length;i++){
       (function(i){
           buttons[i].onclick=function(){
               var clickIndex=parseInt(this.getAttribute('index'));
               var offset=1366*(index-clickIndex);
               animate(offset);
               index=clickIndex;
               buttonsShow();
           }
       })(i)
   }
});
