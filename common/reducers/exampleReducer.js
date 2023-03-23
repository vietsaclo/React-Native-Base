const initialState = {
  prevAction: '',
  name: 'vietsaclo',
}
export default exampleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ex1':
      return {
        ...state,
        prevAction: 'ex1',
        name: payload.name,
      };
    case 'ex2':
      return {
        ...state,
        prevAction: 'ex2',
        name: payload.name,
      };
    default:
      return state;
  }
};
