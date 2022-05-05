import produce from "immer";
import {
  ADDED_ITEM,
  REMOVED_ITEM,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED
} from "./actions";

let id = 1;

export const initialItems = [
  { uuid: id++, name: "AwesomeTofu Roast", price: 14, quantity: 1 },
  { uuid: id++, name: "Vegan Ham", price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  /* or
  if (action.type === ADDED_ITEM) {
    const item = {
      uuid: id++,
      quantity: 1,
      ...action.payload
    };
    return [...state, item];
  } 
} 
*/
  if (action.type === ADDED_ITEM) {
    return produce(state, (draftState) => {
      const item = {
        uuid: id++,
        quantity: 1,
        ...action.payload
      };
      draftState.push(item);
    });
  } else if (action.type === REMOVED_ITEM) {
    return state.filter((element) => element.uuid !== action.payload.uuid);
  } else if (action.type === ITEM_PRICE_UPDATED) {
    return produce(state, (draftState) => {
      let item = draftState.find(
        (element) => element.uuid === action.payload.uuid
      );
      item.price = parseInt(action.payload.price, 10);
    });
  } else if (action.type === ITEM_QUANTITY_UPDATED) {
    return produce(state, (draftState) => {
      let item = draftState.find(
        (element) => element.uuid === action.payload.uuid
      );
      item.quantity = parseInt(action.payload.quantity, 10);
    });
  }
  return state;
};

export default reducer;
