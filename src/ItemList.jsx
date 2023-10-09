import { useState } from "react";
import { styled } from "styled-components";

const ListUl = styled.ul`
  width: 100%;
`;

const ListLi = styled.li`
  margin: 30px 0 0;
  padding: 0 25px;
  display: flex;
  background-color: #f9f9f9;
  min-height: 66px;
  border-radius: 15px;
`;

const InputWrapper = styled.div`
  margin: 0 0 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

const ControlsContainer = styled.div`
  position: absolute;
  right: 0;
`;

const Button = styled.button`
  margin: 0 0 0 10px;
  padding: 10px;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  background-color: #ffffff;
  border: 1px solid #3269ff;
  border-radius: 10px;
  color: #3269ff;
  cursor: pointer;
  transition: all 0.3s;

  & svg {
    fill: #3269ff;
  }

  &:hover,
  &:focus {
    background-color: #3269ff;
  }

  &:hover svg,
  &:focus svg {
    fill: #ffffff;
  }
`;

const InputEdit = styled.input`
  margin: 0;
  padding: 0;
  border: none;
  min-height: 66px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  color: #3269ff;
  flex: 1;
  background-color: transparent;
  outline: none;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    transform: translate(0, -50%);
    background-color: transparent;
    border: 1px solid #ccc;
  }

  &:hover input ~ .checkmark {
    background-color: transparent;
  }

  & input:checked ~ .checkmark {
    background-color: #3269ff;
    border: 1px solid #3269ff;
  }

  & input:checked ~ .checkmark ~ div {
    text-decoration: line-through;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    left: 8px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export default function ItemList({ items, onChangeItem, onDeleteItem }) {
  return (
    <ListUl>
      {items.map((item) => (
        <ListLi key={item.id}>
          <Item item={item} onChange={onChangeItem} onDelete={onDeleteItem} />
        </ListLi>
      ))}
    </ListUl>
  );
}

function Item({ item, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;
  if (isEditing) {
    itemContent = (
      <InputWrapper>
        <InputEdit
          value={item.text}
          onChange={(e) => {
            onChange({
              ...item,
              text: e.target.value,
            });
          }}
        />
        <ControlsContainer>
          <Button onClick={() => setIsEditing(false)}>
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path d="M22.319 4.431 8.5 18.249a1 1 0 0 1-1.417 0L1.739 12.9a1 1 0 0 0-1.417 0 1 1 0 0 0 0 1.417l5.346 5.345a3.008 3.008 0 0 0 4.25 0L23.736 5.847a1 1 0 0 0 0-1.416 1 1 0 0 0-1.417 0Z" />
            </svg>
          </Button>
          <Button onClick={() => onDelete(item.id)}>
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z" />
            </svg>
          </Button>
        </ControlsContainer>
      </InputWrapper>
    );
  } else {
    itemContent = (
      <InputWrapper>
        {item.text}
        <ControlsContainer>
          <Button onClick={() => setIsEditing(true)}>
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path d="M22.853 1.148a3.626 3.626 0 0 0-5.124 0L1.465 17.412A4.968 4.968 0 0 0 0 20.947V23a1 1 0 0 0 1 1h2.053a4.966 4.966 0 0 0 3.535-1.464L22.853 6.271a3.626 3.626 0 0 0 0-5.123ZM5.174 21.122A3.022 3.022 0 0 1 3.053 22H2v-1.053a2.98 2.98 0 0 1 .879-2.121L15.222 6.483l2.3 2.3ZM21.438 4.857l-2.506 2.507-2.3-2.295 2.507-2.507a1.623 1.623 0 1 1 2.295 2.3Z" />
            </svg>
          </Button>
          <Button onClick={() => onDelete(item.id)}>
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z" />
            </svg>
          </Button>
        </ControlsContainer>
      </InputWrapper>
    );
  }
  return (
    <Label>
      <Checkbox
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          onChange({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      <span class="checkmark"></span>
      {itemContent}
    </Label>
  );
}
