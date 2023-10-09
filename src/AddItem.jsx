import { useState } from "react";
import { styled } from "styled-components";

const AddWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AddInput = styled.input`
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 300;
  background-color: #f9f9f9;
  border-radius: 15px;
  border: none;
  flex: 1;

  &::placeholder {
    font-family: "Lato", Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #a8a8a8;
  }
`;

const AddButton = styled.button`
  margin: 0 0 0 15px;
  padding: 15px 30px;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  background-color: #ffffff;
  border: 1px solid #3269ff;
  border-radius: 15px;
  color: #3269ff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background-color: #3269ff;
    color: #ffffff;
  }
`;

export default function AddItem({ onAddItem }) {
  const [text, setText] = useState("");

  return (
    <AddWrapper>
      <AddInput
        type="text"
        value={text}
        placeholder="Drink cofee"
        onChange={(e) => setText(e.target.value)}
      />
      <AddButton
        type="button"
        onClick={() => {
          setText("");
          onAddItem(text);
        }}
      >
        Add
      </AddButton>
    </AddWrapper>
  );
}
