// App.jsx
import React from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

const countState = atom({
  key: "countState",
  default: 0,
});

function Increase() {
  const setCount = useSetRecoilState(countState);
  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}

function Value() {
  const count = useRecoilValue(countState);
  return <p>Count: {count}</p>;
}

function App() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

export default App;
