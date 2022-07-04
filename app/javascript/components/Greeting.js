import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getGreeting } from './redux/greetings/greetings'

function Greeting() {

  const greeting = useSelector((state) => state.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!greeting.length) dispatch(getGreeting())
  }, [])


  return (
    <>
      <h1>Greating from React+API</h1>
      <p>
        { greeting.length ? greeting : 'Loading...' }
      </p>
    </>
  );
}

export default Greeting
