import { connect } from "react-redux";
import { addNewItem } from "../store/items/actions";
import { NewItemForm } from "../components/NewItemForm";

const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
