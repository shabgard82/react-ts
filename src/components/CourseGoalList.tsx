import CourseGoal from "./CourseGoal";
import { type GoalType } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalListType = {
  goals: GoalType[];
  handleDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  handleDelete,
}: CourseGoalListType) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">please add some goals</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 5) {
    warningBox = <InfoBox mode="warning">this is too extra</InfoBox>;
  }

  return (
    <div>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              handleDelete={handleDelete}
            >
              description={goal.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
}
