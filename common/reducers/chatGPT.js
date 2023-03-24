import { CHAT_GPT } from '../utils/actions-type/ActionType';

const initialState = {
  loading: false,
  talks: [],
}
export default chatGptReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHAT_GPT.LOADING:
      return Object.assign({}, {
        ...state,
        loading: payload.loading,
      });
    case CHAT_GPT.ME:
      return Object.assign({}, {
        loading: false,
        talks: [...state.talks, {
          role: CHAT_GPT.ME,
          message: payload.message
        }],
      });
    case CHAT_GPT.GPT:
      return Object.assign({}, {
        loading: false,
        role: CHAT_GPT.GPT,
        talks: [...state.talks, {
          role: CHAT_GPT.GPT,
          message: payload.message
        }],
      });
    default:
      return state;
  }
};
