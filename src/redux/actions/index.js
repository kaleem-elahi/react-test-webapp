export const UPDATE_DATA = 'UPDATE_DATA';

const mockData = [
  { ID: 1, Name: 'TT SEAWISE GIANT', ChristianName: 'Gargantula', Details: { Type: 'Tanker', IMONumber: 7381154 } },
  { ID: 2, Name: 'EVER GIVEN', ChristianName: 'Querdenker', Details: { Type: 'Cargo', IMONumber: 9811000 } },
  { ID: 3, Name: 'HMM ALGECIRAS', ChristianName: 'Thicc Boi', Details: { Type: 'Cargo', IMONumber: 9863297 } },
];

export function mockApiCall() {
  return new Promise(resolve => {
    window.setTimeout(() => resolve(mockData), 3000);
  });
}

export const fetchDataThunk = () => {
  return async (dispatch) => {
    try {
      const result = await mockApiCall();
      const action = { type: UPDATE_DATA, payload: result };
      dispatch(action);
    } catch (err) {
      console.error(err);
    }
  };
};
