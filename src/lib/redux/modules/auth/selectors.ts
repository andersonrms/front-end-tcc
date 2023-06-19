/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from '../../store';

export const selectUserToken = () => {
  return useAppSelector((state) => state.authReducer.value.token);
};
