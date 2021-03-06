function additivesToggler(options) {
	let product = options.product;
	let toggler = options.toggler;
	let closer = options.closer;
	let additives = options.additives;

	$(`${toggler}, ${closer}`).on('click', (event) => {
		let $self = $(event.currentTarget);

		if ($self.parents(additives).hasClass('is--opened')) {
			$(product).removeClass('is--additives-opened');
			$(additives).removeClass('is--opened');
		} else {
			$(product).removeClass('is--additives-opened');
			$(additives).removeClass('is--opened');
			$self.parents(product).toggleClass('is--additives-opened');
			$self.parents(additives).toggleClass('is--opened');
		}
	});
}

let additivesProductOptions = {
	product: '.product',
	toggler: '.product__additives-toggler',
	closer: '.product__additives-close',
	additives: '.product__additives',
};

additivesToggler(additivesProductOptions);