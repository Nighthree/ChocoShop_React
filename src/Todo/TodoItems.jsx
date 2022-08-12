import { memo } from "react";
import RenderTip from "../RenderTip";

const TodoItems = (props) => {
  const { id, text, done, onToggleItem,onDeleteItem } = props;

  const atChange = (e) => {
    onToggleItem(id);
  };
  const atDelete = (e)=>{
    onDeleteItem(id);
  }

  return (
    <div className="border p-3">
      <RenderTip />
      <label>
        <input type="checkbox" name="todo" checked={done} onChange={atChange} />
        {text}
      </label>
      <button type="button" className="btn btn-danger" onClick={atDelete}> 刪除</button>
    </div>
  );
};

export default memo(TodoItems);
