import * as actions from '../actions/globalActions';
import { getCSSRootValue } from '../../helpers';

export interface InitialState {
    windowSize: {
        width: number,
        height: number,
        ismobile: boolean
    }
}

const initialState: InitialState = {
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
    ismobile: window.innerWidth <= getCSSRootValue('--mobile-width')
  }
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
