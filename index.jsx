import {useState} from 'react';

         function Header({title}){
           return <h1>{title ? title : 'Default title'}</h1>;
         }

         function Homepage(){
           const names = [ 'cedrick feze', 'kobe bryan', 'lewis hamilton'];

           const [likes, setLikes] = useState(0);

           function handleClick() {
             setLikes(likes + 1);
           }
          return (
             <div>
               <Header title="beginReact" />
               <ul>
                 {names.map((name) => (
                         <li key={name}>{name}</li>
                   ))}
               </ul>
               <button onClick={handleClick}>Like({likes})</button>
             </div>
         );
       }


          root.render(<Homepage />);