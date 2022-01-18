import { IState } from '../../store';
import { createSelector } from 'reselect';
//======================================================
const TesterScreenState = (state: IState) => state.TesterScreenReducers;
//======================================================
export const getCounter = createSelector(TesterScreenState, testerState => testerState.counter);