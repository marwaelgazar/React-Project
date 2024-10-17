// const addItem = [];

// const addItems = (state = addItem, action) => {
//   switch (action.type) {
//     case "ADDITEM":
//       return [...state, action.payload];
//       break;

//     case "DELITEM":
//       return (state = state.filter((x) => {
//         return x.id !== action.payload.id;
//       }));
//       break;

//     default:
//       return state;
//       break;
//   }
// };

// export default addItems;
const initialState = {
  addItem: [],
};

const addItem = (state = initialState.addItem, action) => {
  switch (action.type) {
    case 'ADDITEM':
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        return state.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: i.quantity + 1 } // If item exists, increase quantity
            : i
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }]; // Add new item with quantity 1
      }
    case 'DELITEM':
      return state.filter((i) => i.id !== action.payload.id); // Delete item
    case 'UPDATE_QUANTITY': // Update quantity when modified in Cart component
      return state.map((i) =>
        i.id === action.payload.id
          ? { ...i, quantity: action.payload.quantity }
          : i
      );
    default:
      return state;
  }
};

export default addItem;
