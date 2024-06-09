import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props }: InputProps,
  ref
) {
  return (
    <div>
      <p>
        <label htmlFor="id">{label}</label>
        <input id={id} name={id} {...props} ref={ref} />
      </p>
    </div>
  );
});
export default Input;
