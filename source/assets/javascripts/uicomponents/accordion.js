$(function() {

	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.module-header');
		var close = this.el.find('.close-fold');
		var wrapper = this.el.find('.accordion-wrapper');

		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);

		close.on('click', function(){
			$(this).next().next(wrapper).toggleClass('hide');
			$(this).next().next().find('.accordion-content').slideUp().parent().removeClass('open');
		});
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('.lds-accordion'), false);
});
