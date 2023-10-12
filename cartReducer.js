export const initialState = {
    items: [],
    total: 0,
    count: 0
  };

export function reducer(cart, action) {
    switch (action.type) {
        case 'setCart':
            return {
                items: action.payload.items,
                total: action.payload.total,
                count: action.payload.count
            };

        case 'addItem':
            const itemIndexAdd = cart.items.findIndex((item) => item.name === action.payload.name);
            if (itemIndexAdd === -1) {
                const newItem = { ...action.payload, quantity: 1 };
                return {
                ...cart,
                items: [...cart.items, newItem],
                total: Number(cart.total) + Number(newItem.price),
                count: Number(cart.count + 1)
                };
            } else {
                const updatedItems = [...cart.items];
                const updatedQuantity = updatedItems[itemIndexAdd].quantity + 1;
                updatedItems[itemIndexAdd] = { ...updatedItems[itemIndexAdd], quantity: updatedQuantity };
                return {
                ...cart,
                items: updatedItems,
                total: Number(cart.total) + Number(updatedItems[itemIndexAdd].price),
                count: Number(cart.count + 1)
                };
            }

        case 'removeItem':
            const itemIndexRomove = cart.items.findIndex((item) => item.name === action.payload.name);
            if (itemIndexRomove !== -1) {
              const updatedItems = [...cart.items];
              const updatedItem = { ...updatedItems[itemIndexRomove] };
              if (updatedItem.quantity === 1) {
                updatedItems.splice(itemIndexRomove, 1);
              } else {
                const updatedQuantity = updatedItem.quantity - 1;
                updatedItem.quantity = updatedQuantity;
                updatedItems[itemIndexRomove] = updatedItem;
              }
              return {
                ...cart,
                items: updatedItems,
                total: Number(cart.total) - Number(updatedItem.price),
                count: Number(cart.count - 1)
              };
            } else {
              return cart;
            }
            
        case 'clearCart':
            return initialState;

        default:
            return cart;
    }
}

