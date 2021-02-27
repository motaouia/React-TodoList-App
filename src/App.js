import logo from './logo.svg';
import './App.css';
/*import Demo from './components/Demo';
import Demo1 from './components/Demo1';
import Parent from './components/Parent';
import Sample from './components/Sample';
*/
import TodoList from './components/TodoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

//import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
