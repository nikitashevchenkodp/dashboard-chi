import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from '../store/action-creators';

// export const useAppDispatch: () => AppDispatch = useDispatch;

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Actions, dispatch);
};
