
import { StyledApp } from './App.styled.js';
import Button from './Components/Button/Button';
import Dashboard from './Components/Dashboard/Dashboard';
import InputField from './Components/InputField/InputField';
import Main from './Components/Main/Main.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';

function App() {
  return (

    <StyledApp>
               {/* sidebar */}
         <div className='app__sidebar'>
              <Sidebar/>
          </div>
          {/* main */}
              <div className='main'>
                <Main />
              </div>

    </StyledApp>
  );
}

export default App;
