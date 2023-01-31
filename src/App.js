import logo from './logo.svg';
import './App.css';
import Counter from './Pages/Counter/Counter';
import Form from './Pages/Form/Form';

function App() {
  return (
    <div>
      <h1 className='text-4xl text-center font-bold mt-12'>Counter App</h1>
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

export default App;
