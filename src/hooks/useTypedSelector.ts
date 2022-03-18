import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../stateManagement/reducers";

/**
 * Typed useSelector hook
 */
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;