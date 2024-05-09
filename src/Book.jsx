import React from 'react'

// const Book = (props) => {
//     console.log(props);
//     return (
//         <div className='book'>
//             <h2>{props.title}</h2>
//             <img src={props.imglink}/>
//             <h2>{props.author}</h2>
//             <h3>{props.price}</h3>
            
//         </div>
//     );
// }
const Book=({author, title,price,imglink})=>{
    return (
        <div className='book'>
            <h2>{title}</h2>
            <img src={imglink}/>
            <h2>{author}</h2>
            <h3>{price}</h3>
            
        </div>
    );
}

export default Book;
const Title = () => <h1>Dopamine Detox</h1>;

const Price = () => {
    return <h2>Total Price ₹496.00</h2>
};

const Image = () => {
    return <h3><img src="https://m.media-amazon.com/images/I/71Q0U-8lxJS._SY466_.jpg" alt="" width={250}  height={300}/></h3>
};

const Author = () => {
    return <h3>Thibaut Meurissesss (Author)</h3>
};