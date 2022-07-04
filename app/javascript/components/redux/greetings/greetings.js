const FETCHED = 'helloRailsReact/greetings/FETCHED'

const greetingFetched = (text) => ({
  type: FETCHED,
  payload: {
    text,
  }
})

export const getGreeting = () => (dispatch) => {
  console.log('getGreeting...')
  const URL = '/messages.json';
  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      dispatch(greetingFetched(res.data))
    });
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCHED:
      return action.payload.text;
    default:
      return state;
  }
}
