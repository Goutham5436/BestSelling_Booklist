/* this is the main component */

import React from 'react';
import ReactDOM from 'react-dom/client'

import './style.css'
import {books} from './books'
import Book from './Book'

  function BookList() {
    return (
        <React.Fragment>
            <h1>Best Selling Books</h1>
      <section className='booklist'>
        {/* <EventExample/> */}
        {books.map((bk,index) => {
          return (
            <Book {...bk} key={bk.id} number={index}
          />
          );
        })}
      </section>
      </React.Fragment>
    );
  }

//   const EventExample = () =>{
//     const handleFormInput = (e) =>{
//         console.log(e);
//         console.log(e.target.name);
//         console.log(e.target.value);
//     };
//     const handleButtonClick = () =>{
//         alert('Handle button input');
//     };
//     const handleFormSubmission = (e) =>{
//         e.preventDefault();
//         console.log('Form Submitted');
//     };
//     return (
//         <section>
//             <form onSubmit={handleFormSubmission}>
//                 <h2>Typical form</h2>
//                 <input
//                     type='text'
//                     name='product'
//                     onChange={handleFormInput}
//                     style={{margin : '1rem 0'}} 
//                 />
//             {/* add button with type='submit' */}
//         <button type='submit'>submit form</button>
//       </form>
//       <button onClick={() => console.log('Handle from input') }>click me</button>
//     </section>
//     );

//   }


// const Book = (props) => {
//     const {img, title, author} = props;
   
    
// //    console.log(props);
//     return (<article className = "book">
//         <img src={img} />
//         <h2>{title}</h2>
//         <h4>{author}</h4>
//     <p>{props.age}</p>
//     <h4>{props.sum}</h4>
//     </article>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


// [React Events](https://reactjs.org/docs/events.html)