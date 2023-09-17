import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}
interface GridProps extends ChildrenProps {
  col?: string;
  col1?: string;
  col2?: string;
  className?: string;
}

export function Grid({
  children,
  col = "2",
  col1,
  col2,
  className,
}: GridProps) {
  return (
    <div
      className={`grid ${className ? className : ""}`}
      data-col1={col1}
      data-col={col}
      data-col2={col2}
    >
      {children}
    </div>
  );
}

export function Container({ children }: ChildrenProps) {
  return <div className="container">{children}</div>;
}
