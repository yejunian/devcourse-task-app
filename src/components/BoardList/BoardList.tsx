import clsx from 'clsx';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { FC, useState } from 'react';
import { FiLogIn, FiPlusCircle } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';

import { firebaseApp } from '../../firebase';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { useAuth } from '../../hooks/useAuth';
import { removeUser, setUser } from '../../store/slices/userSlice';
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from './BoardList.css';
import SideForm from './SideForm/SideForm';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList: FC<TBoardListProps> = ({
  activeBoardId,
  setActiveBoardId,
}) => {
  const dispatch = useTypedDispatch();

  const { boardArray } = useTypedSelector((state) => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const { isAuth } = useAuth();

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        dispatch(
          setUser({
            email: userCredential.user.email ?? '',
            id: userCredential.user.uid,
          }),
        );
      })
      .catch((error) => console.error(error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={container}>
      <div className={title}>게시판:</div>

      {boardArray.map((board, index) => (
        <div
          key={board.boardId}
          onClick={() => setActiveBoardId(board.boardId)}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex((b) => b.boardId === activeBoardId) ===
                index,
            },
            {
              [boardItem]:
                boardArray.findIndex((b) => b.boardId === activeBoardId) !==
                index,
            },
          )}
        >
          <div>{board.boardName}</div>
        </div>
      ))}

      <div className={addSection}>
        {isFormOpen ? (
          <SideForm setIsFormOpen={setIsFormOpen} />
        ) : (
          <FiPlusCircle className={addButton} onClick={handleClick} />
        )}

        {isAuth ? (
          <GoSignOut className={addButton} onClick={handleSignOut} />
        ) : (
          <FiLogIn className={addButton} onClick={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default BoardList;
