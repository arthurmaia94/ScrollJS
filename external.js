// external.js
var doc, bod, htm;
addEventListener('load', function(){
  doc = document; bod = doc.body; htm = doc.documentElement;
  addEventListener('scroll', function(){
    doc.querySelector('header').style.backgroundColor = htm.scrollTop > 199 ? 'blue' : 'red';
  });
});