import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

//Типизированный хук вместо useSelector.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;