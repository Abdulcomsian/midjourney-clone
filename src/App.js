import Sidebar from './component/sidebar/sidebar';
import MainWrapper from './component/main/main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNav from './component/bottom-nav/bottom-nav';

function App() {
  return (
    <>
      <div className='main-wrapper d-flex'>
        <Sidebar/>
        <MainWrapper/>
      </div>
      <BottomNav/>
    </>
  );
}

export default App;
