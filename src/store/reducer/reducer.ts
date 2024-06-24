import { boardsReducer } from '../slices/boardsSlice';
import { loggerReducer } from '../slices/loggerSlice';
import { modalReducer } from '../slices/modalSlice';

const reducer = {
  logger: loggerReducer,
  board: boardsReducer,
  modal: modalReducer,
};

export default reducer;
