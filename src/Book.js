/*Books array is one component or second component*/

const Book = (props) => {
    const {img, title, author,number} = props;
   
    return (<article className = "book">
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className='number'>{`# ${number+1}`}</span>
    </article>
    );
}
export default Book;