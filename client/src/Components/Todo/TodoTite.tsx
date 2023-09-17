import { ReactNode } from "react";

function TodoTite({
  title = "All Todos",
  className,
}: {
  title?: string;
  className: ReactNode;
}) {
  return <h2 className={`Todo_head ${className}`}>{title}</h2>;
}

export default TodoTite;
