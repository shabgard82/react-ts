import { type PropsWithChildren } from "react";

// this is two kind of type first
// type CourseGoalType = {
//   title: string;
//   children: ReactNode;
// };
// second
type CourseGoalType = PropsWithChildren<{
  id: number;
  title: string;
  handleDelete: (id: number) => void;
}>;
export default function CourseGoal({
  id,
  title,
  handleDelete,
  children,
}: CourseGoalType) {
  return (
    <div
      style={{
        backgroundColor: "gray",
        textAlign: "center",
        margin: "20px 20px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
}
