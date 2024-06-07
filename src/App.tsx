import laptop from "../public/assets/laptop.jpeg";
import Headers from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewCourse from "./components/NewCourse";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

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

      {/* make custom inputs */}
      <Input label="your name" id="name" type="text" />
      <Input label="your age  " id="age" type="number" />

      {/* make custom buttons */}
      <p>
        <Button el="button">a button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">
          a link
        </Button>
      </p>

      {/* make polymorphic components  */}
      <Container as={Button}>click</Container>
      {/* <Container as={Input}>type</Container> */}
    </div>
  );
}

export default App;
