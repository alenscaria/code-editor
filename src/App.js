import './App.css';
import SubmitButton from './components/SubmitButton';
import CodeEditor from './components/CodeEditor';
import DisplayQuest from './components/DisplayQuest';
import Navbar from './components/Navbar';


function App() {

  const handleSubmit = () => {
    // Handle submission logic here
  };

  return (
    <div>
    <Navbar />
    <DisplayQuest />
    <CodeEditor />
    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
  </div>
  );
}

export default App;
