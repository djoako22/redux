export const cart = (
    state = {
        items: [],
        total: 0,
    },
    action
) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const { item } = action;
            const { items, total } = state;
            let newItems = [...items];
            if (newItems.find((i) => i.name === item.name)) {
                newItems = newItems.map((i) => {
                    if (i.name === item.name) {
                        return {
                            ...i,
                            quantity: i.quantity + 1,
                        };
                    }
                    return i;
                });
            } else {
                newItems.push({
                    ...item,
                    quantity: 1,
                });
            }
            let newTotal = total + item.price;
            return {
                items: newItems,
                total: newTotal,
            };
        }
        case "REMOVE_FROM_CART": {
            const { item } = action;
            const { items, total } = state;
            let newItems = [...items];
            newItems = newItems
                .map((i) => {
                    if (i.name === item.name) {
                        i.quantity--;
                        return i;
                    }
                    return i;
                })
                .filter((item) => item.quantity > 0);
            let newTotal = total - item.price;
            return {
                items: newItems,
                total: newTotal,
            };
        }
        default:
            return state;
    }
}