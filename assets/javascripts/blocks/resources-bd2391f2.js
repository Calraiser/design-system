$(function(){var e=function(e,t){this.el=e||{},this.multiple=t||!1,this.el.find(".lds-resources__title").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};e.prototype.dropdown=function(e){var t=e.data.el;$this=$(this),$next=$this.next(),$next.slideToggle(),$this.parent().toggleClass("open"),e.data.multiple||t.find(".lds-resources__content").not($next).slideUp().parent().removeClass("open")};new e($(".lds-resources"),!1)});