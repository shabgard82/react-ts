import laptop from "../public/assets/laptop.jpeg";
import Headers from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewCourse from "./components/NewCourse";

export type GoalType = {
  title: string;
  description: string;
  id: number;
};

function App() {
  // second way to pass type in the state :))
  // const [goals,setGoals]=useState<Array<GoalType>>([])
  const [goals, setGoals] = useState<GoalType[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: GoalType = {
        title: goal,
        description: summary,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <div>
      <Headers image={{ src: laptop, alt: "a list of goals" }}>
        <h1>your goals</h1>
      </Headers>
      <NewCourse onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} handleDelete={handleDeleteGoal} />
    </div>
  );
}

export default App;
