import TailButton from "@/ui/TailButton"
import type { Todo, completedT } from "@/types/Todo"

interface TodoItemProps {
  item : Todo, 
  onDelete : (id:string) => void, 
  onToggle : (id:string, completed:completedT) => void
}
export default function TodoItem({item, onDelete, onToggle}:TodoItemProps) {
  return (
    <div className="w-full px-4 py-2 mt-2 flex justify-between items-center
                    border border-gray-300 rounded-lg">
      <div onClick={() => onToggle(item.id, item.completed)}>
        {
          item.completed == "X" ? "🔲" : "✅"
        }
        <span className={`ml-2 ${item.completed == "X" ? "" : "text-red-500 line-through"}`}>
          {item.text}
        </span>
      </div>
      <div>
        <TailButton caption="삭제"
                  color="orange"
                  onHandle={() => onDelete(item.id)} />
      </div>
    </div>
  )
}