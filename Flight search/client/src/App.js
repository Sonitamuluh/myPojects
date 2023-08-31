import logo from './logo.svg';
import './App.css';
import TopNav from './component/TopNav';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <header>
      <div style ={{minHeight:"7vh", width:'100%', backgroundColor:'#1976d2'}}></div>
      <TopNav/>
      </header>

      <main>
      <div className='main-body'>
      <AppRoutes/>

      </div>
      </main>

      <footer>
        <div style ={{minHeight:"7vh", width:'100%', backgroundColor:'#1976d2'}}></div>
      </footer>
    </div>
  );
}

export default App;
