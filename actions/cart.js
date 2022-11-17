export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        item: product,
    };
};

export const removeFromCart = (product) => {
    return {
        type: "REMOVE_FROM_CART",
        item: product
    };
};
