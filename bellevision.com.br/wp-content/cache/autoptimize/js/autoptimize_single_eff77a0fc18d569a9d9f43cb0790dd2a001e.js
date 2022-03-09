var numberUp=(function(){var self=this;this.init=function(){var els=document.querySelectorAll('.numberUp');if(els.length<1){setTimeout(function(){self.init();},1000);return;}
for(var i=0;i<els.length;i++){var el=els[i];var min=el.getAttribute('data-min');el.number=min;el.innerHTML=min;el.classList.add('effect');setTimeout(function(el){self.animate(el);},1000,el);}}
this.formatMoney=function(number){return number.toLocaleString('pt-BR');}
this.animate=function(el){var rect=el.getBoundingClientRect();if(rect.top>(window.innerHeight/1)){setTimeout(function(el){self.animate(el);},100,el);return false;}
var min=el.getAttribute('data-min');var max=el.getAttribute('data-max');var step=el.getAttribute('data-step');if(Number(el.number)>=Number(max)){el.innerHTML=self.formatMoney(Number(max));el.classList.remove('effect');return false;}
el.number=Number(el.number)+Number(step);var porcent=(el.number/max*100).toFixed(1);var fator=1;var speed=50;if(porcent>=97&&max<100000){el.setAttribute('data-step','1')
speed=porcent;}else if(porcent>=97&&max>100000){el.setAttribute('data-step','10000')
speed=porcent;}
el.innerHTML=self.formatMoney(el.number);setTimeout(function(el){self.animate(el);},speed*fator,el);}
return this;})();numberUp.init();