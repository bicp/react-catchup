import { useContext } from "react";
import { ExampleContext } from "./Context";

export function Card({ children }) {
  const { user } = useContext(ExampleContext);
  return (
    <div className="card">
      <code>{JSON.stringify(user)}</code>
      {children}
    </div>
  );
}
