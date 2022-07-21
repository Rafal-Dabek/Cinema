import {Header} from "./Components/Header"
import {HomePage} from "./Components/Homepage"
import {RegisterSecondStep} from "./Components/RegisterSecondStep"
import {Succes} from "./Components/Succes"
import {BrowserRouter, Routes ,Route} from 'react-router';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
     <Route path='/'  element={<HomePage/>} />
     <Route path='/SecondStep'  element={<RegisterSecondStep/>} />
     <Route path='/Succes'  element={<Succes/>} />
    </Routes>
    </>
  );
}

export default App;
