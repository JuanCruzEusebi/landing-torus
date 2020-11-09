import './App.css';
import Main from "./components/main/Main/Main"
import Products from "./components/main/products/Products"
import Ig from "./components/main/Instagram/Ig"
import Banner from "./components/main/Banner/Banner"
// import Slider from "./components/main/Slider/Slider"
import Input from "./components/main/Input/Input"

function App() {
  return (
    <div className="App">
       <Main />
       <Products />
       <Banner />
       <Ig /> 
       {/* <Banner /> */}
       {/* <Slider />  */}
       <Input />
    </div>
  );
}

export default App;
