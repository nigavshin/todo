import { useReducer } from "react";
import itemsReducer from "./itemsReducer";
import AddItem from "./AddItem";
import ItemList from "./itemList";
import { styled } from "styled-components";

const Todo = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 30px;
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 35px;
  line-height: 100%;
  text-align: center;
`;

let nextId = 0;
const initialItems = [];

export default function App() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  function handleAddItem(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeItem(item) {
    dispatch({
      type: "changed",
      item: item,
    });
  }

  function handleDeleteItem(itemId) {
    dispatch({
      type: "deleted",
      id: itemId,
    });
  }

  return (
    <Todo className="todo">
      <Title>To-do list</Title>
      <AddItem onAddItem={handleAddItem} />
      <ItemList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
    </Todo>
  );
}
