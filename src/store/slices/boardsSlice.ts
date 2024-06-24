import { createSlice } from '@reduxjs/toolkit';

import { IBoard } from '../../types';

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: TBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: '첫 번째 게시물',
      lists: [
        {
          listId: 'list-0',
          listName: 'List 1',
          tasks: [
            {
              taskId: 'task-0',
              taskName: 'Task 1',
              taskDescription: 'Description 1',
              taskOwner: 'yejunian',
            },
            {
              taskId: 'task-1',
              taskName: 'Task 2',
              taskDescription: 'Description 2',
              taskOwner: 'yejunian',
            },
            {
              taskId: 'task-2',
              taskName: 'Task 3',
              taskDescription: 'Description 3',
              taskOwner: 'yejunian',
            },
          ],
        },
        {
          listId: 'list-1',
          listName: 'List 2',
          tasks: [
            {
              taskId: 'task-3',
              taskName: 'Task 4',
              taskDescription: 'Description 4',
              taskOwner: 'yejunian',
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
});

export const boardsReducer = boardsSlice.reducer;
