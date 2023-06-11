import './App.css';
import LIBRARY from './LIBRARY.json'
function App() {
    const textToType:string = LIBRARY.texts[0].text

  return (
      <div className={'app'}>
          <h1>{textToType}</h1>
      </div>
  );
}

export default App;