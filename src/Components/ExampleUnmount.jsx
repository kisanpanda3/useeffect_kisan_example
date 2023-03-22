import { useEffect, useState } from "react";
function ExampleUnmount() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log(`callback inviked , time is ${Date.now()}`);
      setCounter((count) => count + 1);
    }, 1000);
    const cleanup = () => {
      clearInterval(id);
    };
    return cleanup;
  }, []);
  return (
    <div>
      <h3>Count:{counter}</h3>
    </div>
  );
}
export default ExampleUnmount;
