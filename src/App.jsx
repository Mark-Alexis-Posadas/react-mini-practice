// import { useReducer } from "react";

// const initialState = {
//   isToggleOne: false,
//   isToggleTwo: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE":
//       return { ...state, [action.payload]: !state[action.payload] };
//     default:
//       return state;
//   }
// };

// export default function App() {
//   const [toggle, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <button
//         onClick={() => dispatch({ type: "TOGGLE", payload: "isToggleOne" })}
//       >
//         Toggle one
//       </button>
//       <button
//         onClick={() => dispatch({ type: "TOGGLE", payload: "isToggleTwo" })}
//       >
//         Toggle two
//       </button>

//       {toggle.isToggleOne && <div>Content one</div>}
//       {toggle.isToggleTwo && <div>Content two</div>}
//     </div>
//   );
// }

import React from "react";
import ReducerForm from "./components/Forms/ReducerForm";

const App = () => {
  return (
    <>
      <ReducerForm />
    </>
  );
};

export default App;
