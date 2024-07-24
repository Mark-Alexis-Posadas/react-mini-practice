// import { useState } from "react";

// export default function App() {
//   const [stock, setstock] = useState(true);
//   return (
//     <div>
//       <p className={stock ? "text-green-500" : "text-red-500"}>
//         {stock ? "in stock" : "out of stock"}
//       </p>
//       <select value={stock} onChange={() => setstock(!stock)}>
//         <option value="outofstock">in stock</option>
//         <option value="instock">out of stock</option>
//       </select>
//     </div>
//   );
// }

import React from "react";
import ObjectsEditPrice from "./exercises/objects/ObjectsEditPrice";

export default function App() {
  return (
    <div>
      <ObjectsEditPrice />
    </div>
  );
}
