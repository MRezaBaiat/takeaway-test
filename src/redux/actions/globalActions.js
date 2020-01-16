import { getCSSRootValue } from '../../helpers';

export const ACTION_WINDOW_SIZE_CHANGE = 'ACTION_WINDOW_SIZE_CHANGE';

export const actionWindowSizeChanged = () => {
  return {
    type: ACTION_WINDOW_SIZE_CHANGE,
    payload: {
      width: window.innerWidth,
      height: window.innerHeight,
      ismobile: window.innerWidth <= getCSSRootValue('--mobile-width')
    }
  };
};
