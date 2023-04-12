import './App.css';
import CustomButton from './components/CustomButton';
import CodeEditor from './components/CodeEditor';
import DisplayQuest from './components/DisplayQuest';
import Navbar from './components/Navbar';


function App() {

  const handleSubmit = () => {
    // Handle submission logic here
  };

  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-row mt-5">
        <div className="w-1/2 p-4 overflow-y-auto h-[500px]">
          <DisplayQuest />
        </div>
        <div className="w-1/2 p-4">
          <CodeEditor />
        </div>
      </div>
      <div className="flex flex-row justify-center ml-[700px] mt-0">
        <CustomButton onClick={handleSubmit}>Save</CustomButton>
        <CustomButton onClick={handleSubmit} className="bg-red-600 ml-5">Submit</CustomButton>
      </div>
    </div>
  );
}

export default App;
