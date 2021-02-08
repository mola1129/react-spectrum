import { ReactSpectrum } from "./ReactSpectrum";
import { Button, Button2 } from "./Components";

function App() {
  return (
    <>
      <div class="react-spectrum">
        <ReactSpectrum />
      </div>
      <div class="react-aria">
        <Button onPress={() => alert("Button pressed!")}>Press me</Button>
        <Button2 onPress={() => alert("Button2 pressed!")}>Test</Button2>
      </div>
    </>
  );
}

export default App;
