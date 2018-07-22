const defaultState = {
  cars: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'ADD_CAR':
      const cars = [...state.cars];
      cars.push(payload);
      return { ...state, cars };
    default:
      return state;
  }
};
