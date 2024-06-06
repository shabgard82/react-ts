import { useRef, type FormEvent } from "react";

type newGoalType = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewCourse({ onAddGoal }: newGoalType) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enterdGoal = goalRef.current!.value;
    const enterdSummary = summaryRef.current!.value;
    event.currentTarget.reset();
    onAddGoal(enterdGoal, enterdSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">your Goal</label>
        <input type="text" id="title" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">your Description</label>
        <input type="text" id="summary" ref={summaryRef} />
      </p>
      <button>Add Goal</button>
    </form>
  );
}
