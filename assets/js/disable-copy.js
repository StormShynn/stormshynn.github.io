eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8.n=6(0){0=(0||a.0);5(0.d===g){7 4}};8.o=6(0){0=(0||a.0);5(0.d===g){7 4}};8.i=6(0){0=(0||a.0);5(0.d===g){7 4}};6 b(){7 4};6 q(e){f h=(j)?e:0;f c=(j)?h.1:h.m;5((c===2)||(c===3))7 4};8.x=b;8.y=b;f 9=4;a.r=6(e){5(e.1===k)9=4};a.i=6(e){5(e.1===k)9=l;5(((e.1===z)||(e.1===w)||(e.1===v)||(e.1===s)||(e.1===t)||(e.1===u))&&9===l){7 4}};9=4;8.p=b;',36,36,'event|which|||false|if|function|return|document|isCtrl|window|contentprotector|eventbutton|keyCode||var|123|myevent|onkeydown|isNS|17|true|button|onkeypress|onmousedown|ondragstart|mousehandler|onkeyup|67|86|83|88|65|oncontextmenu|onmouseup|85'.split('|'),0,{}))
window.oncontextmenu = function () {
    return false;
};

document.addEventListener("keydown", function(event){
    var key = event.key || event.keyCode;

    if (key == 123) {
        return false;
    } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
        return false;
    }
}, false);
$(selector).click(function(e) {
  if(e.shiftKey) {
     return false;
  }
  if(e.ctrlKey) {
     return false;
  }
  if(e.altKey) {
     return false;
  }
});
