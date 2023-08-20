import logo from './logo.svg';
import './App.css';
import BoardList from './components/BoardList';
import Write from './components/Write';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardView from './components/BoardView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h2 style={{textAlign:'center'}}>게시판</h2>
        {/* <BoardList></BoardList>
        <br></br>
        <Write></Write> */}
        <Routes>
          <Route path='/postView/:id' element={<BoardView></BoardView>}></Route>
          <Route path='/' element={<BoardList></BoardList>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
