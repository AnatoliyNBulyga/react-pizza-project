import React, {useState} from "react";


export default function Categories({items}) {
   const [activeItem, setActiveItem] = useState(0);
   const toggleSetActiveItem = index => setActiveItem(index);

   return (
       <div className="categories">
           <ul>
               {
                   items && items.map( (item, index) =>
                       <li
                           className={activeItem === index ? 'active' : index }
                           onClick={() => toggleSetActiveItem(index)}
                           key={`${item}_${index}`} >{item}</li>
                   )
               }
           </ul>
       </div>
   );
}