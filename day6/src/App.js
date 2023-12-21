import './App.css';
// import Form from './component/Form';
import MyComponent from './component/MyComponent';
import WithLoading from './component/WithLoading';

function App() {
  const WithLoadingComponent=WithLoading(MyComponent);
  return (
    <div className="App">
      {/* <Form/> */}
<WithLoadingComponent/>
      
    </div>
  );
}

export default App;


