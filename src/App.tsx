import './App.css'
import { useViewportSize } from './Hooks/useViewportSize'

function App() {
  const { width, height } = useViewportSize();

  return (
    <div>
      Width: {width}, height: {height}
    </div>
  );
}

export default App
