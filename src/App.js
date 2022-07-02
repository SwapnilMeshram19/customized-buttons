import './App.css';
import {Button} from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Buttons Customization</h1>
      <div>
      <Button>Default Button</Button>
      <Button primary>Primary Button</Button>
      <Button dashed>Dashed Button</Button>
      <Button text>Text Button</Button>
      <Button link>Link Button</Button>

      </div>
     
    </div>
  );
}

export default App;
