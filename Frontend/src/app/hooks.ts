import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import type { DispatchType, RootState } from './Store';

export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;