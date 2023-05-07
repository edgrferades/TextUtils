import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode enabled', 'Success');
    } else {
      setMode('light');
      showAlert('Light mode enabled', 'Success');
    }
  };

  useEffect(() => {
    const body = document.body;
    body.style.color = mode === 'dark' ? 'white' : 'black';
    body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';
  }, [mode]);

  return (
    <div>
      <Navbar mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <Textform showAlert={showAlert} />
    </div>
  );
}

export default App;
