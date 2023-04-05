// import React, { useState } from "react";

// const useToggle = (initialState) => {
//   const [toggleValue, setToggleValue] = useState(initialState);
//   const toggler = () => {
//     setToggleValue(!toggleValue);
//     return [toggleValue, toggler];
//   };
// };
// const [toggle, setToggle] = useToggle();
// const ToggleElementUseToggle = () => {
//   return (
//     <>
//       <button onClick={setToggle} class="btn btn-secondary mb-5">
//         Toggle State
//       </button>
//       {toggle && (
//         <ul class="list-group">
//           <li class="list-group-item">An item</li>
//           <li class="list-group-item">A second item</li>
//           <li class="list-group-item">A third item</li>
//           <li class="list-group-item">A fourth item</li>
//           <li class="list-group-item">And a fifth one</li>
//         </ul>
//       )}
//     </>
//   );
// };

// export default ToggleElementUseToggle;
