import React, {useState} from "react";


export default function Categories({items}) {
   const [activeItem, setActiveItem] = useState(0);

   return (
       <div className="categories">
           <ul>
               {
                   items && items.map( (item, index) =>
                       <li
                           className={activeItem === index ? 'active' : '' }
                           onClick={() => setActiveItem(index)}
                           key={`${item}_${index}`} >{item}</li>
                   )
               }
           </ul>
       </div>
   );
}