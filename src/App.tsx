import { useState } from 'react';

import { appContainer, board, buttons } from './App.css';
import BoardList from './components/BoardList/BoardList';
import ListsContainer from './components/ListsContainer/ListsContainer';
import { useTypedSelector } from './hooks/redux';

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');

  const boards = useTypedSelector((state) => state.boards.boardArray);
  const [activeBoard] = boards.filter(
    (board) => board.boardId === activeBoardId,
  );
  const lists = activeBoard.lists;

  return (
    <div className={appContainer}>
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />

      <div className={board}>
        <ListsContainer lists={lists} boardId={activeBoard.boardId} />
      </div>

      <div className={buttons}>
        <button>이 게시판 삭제하기</button>
        <button>활동 목록 보이기</button>
      </div>
    </div>
  );
}

export default App;
