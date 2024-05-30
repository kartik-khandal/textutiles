import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar tittle="TextUtiles" />
      <div className='container my-3'>
        <TextForm heading='Enter the Text' />
      </div>
    </>
  );
}

export default App;
