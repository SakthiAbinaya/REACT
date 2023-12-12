import logo from './logo.svg';
import './App.css';
// import ChildComponent from './components/ChildComponent';
// import ChildClass from './components/ChildClass';
// import Counter from './components/Counter';
// import CounterClass from './components/CounterClass';
// import ConditionalRendering from './components/ConditionalRendering';
// import TernaryCondition from './components/TernaryCondition';
// import AndCondition from './components/AndConditions';

function App() {
  // const msg="Hi from parent component-app";
  // const msg1="Hi from parent component class";
  return (
    <div className="App">
      {/* <ChildComponent message={msg}/>
      <ChildClass message ={msg1}/>
      <Counter/>
      <CounterClass/>
      <ConditionalRendering/>
      <TernaryCondition/>
      <AndCondition/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
