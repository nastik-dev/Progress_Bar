import './App.css'
import Aurora from './Background.jsx';
import RocketProgress from './Progress-bar.jsx';

function App() {

  return (
    <>
    <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
      
    <RocketProgress/>
    </>
  )
}

export default App
