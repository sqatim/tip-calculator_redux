export const ADDED_ITEM = "ADDED_ITEM";
export const REMOVED_ITEM = "REMOVED_ITEM";
export const ITEM_PRICE_UPDATED = "ITEM_PRICE_UPDATED";
export const ITEM_QUANTITY_UPDATED = "ITEM_QUANTITY_UPDATED";

export const addNewItem = (name, price) => ({
  type: ADDED_ITEM,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: REMOVED_ITEM,
  payload: {
    uuid
  }
});

export const updateItemPrice = (uuid, price) => ({
  type: ITEM_PRICE_UPDATED,
  payload: {
    uuid,
    price
  }
});

export const updateItemQuantity = (uuid, quantity) => ({
  type: ITEM_QUANTITY_UPDATED,
  payload: {
    uuid,
    quantity
  }
});
