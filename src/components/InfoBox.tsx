import { ReactNode } from "react";

type InfoType = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoType) {
  if (mode === "hint") {
    return (
      <div style={{ backgroundColor: "green", textAlign: "center" }}>
        <h2>hint</h2>
        <p>{children}</p>
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: "orange" }}>
      <h2>warning</h2>
      <p>{children}</p>
    </div>
  );
}
