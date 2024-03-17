const getStoredCart = () => {
	const storedCartString = localStorage.getItem("cart");
	if (storedCartString) {
		return JSON.parse(storedCartString);
	}
	return [];
};

const saveCartLS = (cart) => {
	const cartStringified = JSON.stringify(cart);
	localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
	const cart = getStoredCart();
	cart.push(id);
	// save to local storage
	saveCartLS(cart);
};

const removeFromLS = (id) => {
	const cart = getStoredCart();
	// removing every id
	const remaining = cart.filter((idx) => idx !== id);
	saveCartLS(remaining);
};

export { addToLS, getStoredCart, removeFromLS };
