import * as actions from '../actions/actions';
import Restaurant from '../../models/Restaurant';
import data from '../../assets/data';

export interface InitialState {
  data: Restaurant[]
}

const initialState: InitialState = {
  data: data
};

const restaurantsReducer = (state = initialState, action: { type: any;payload: any }) => {
  switch (action.type) {
    case actions.ACTION_WINDOW_SIZE_CHANGE:
      return {
        ...state,
        windowSize: {
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default restaurantsReducer;
