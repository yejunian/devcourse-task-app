import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, TRootState } from '../store';

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
