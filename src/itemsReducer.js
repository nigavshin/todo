export default function itemsReducer(items, action) {
  switch (action.type) {
    case "added": {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return items.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        } else {
          return item;
        }
      });
    }
    case "deleted": {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error("Unknown action " + action.type);
    }
  }
}
