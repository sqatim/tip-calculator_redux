import { connect } from "react-redux";
import {
  removeItem,
  updateItemPrice,
  updateItemQuantity
} from "../store/items/actions";
import { MenuItem } from "../components/MenuItem";
import { selectItemTotal } from "../store/items/selectors";

const mapStateToProps = (state, ownProps) => ({
  total: selectItemTotal(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updateItemPrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateItemQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
