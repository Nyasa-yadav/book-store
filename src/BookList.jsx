import React from 'react'
import Book from './Book';
const data= [
{   id: 1,
    title:"Let Us c",
    author:"Yashwant Kanikar",
    imglink:"https://m.media-amazon.com/images/I/71Q0U-8lxJS._SY466_.jpg",
    price:452.5,
},
{   id: 2,
    title:"Let Us c++",
    author:"Yashwant Kanikar",
    imglink:"https://m.media-amazon.com/images/I/71Q0U-8lxJS._SY466_.jpg",
    price:452.5,
},
{   id: 3,
    title:"Sherlock Holmes",
    author:"Arthur Doyle",
    imglink:"https://m.media-amazon.com/images/I/71YXYFviUmL._AC._SR360,460.jpg",
    price:189,
},
{   id: 4,
    title:"The Silent Patient",
    author:"Alex Michaelides",
    imglink:"https://m.media-amazon.com/images/I/81DJwkSbt-L._AC._SR360,460.jpg",
    price:232,
},
{   id: 5,
    title:"DESTINATIONS of a LIFETIME",
    author:"National geographic",
    imglink:"https://m.media-amazon.com/images/I/91vMxtTtWaL._AC._SR360,460.jpg",
    price:1852.5,
},
{   id: 6,
    title:"Black Holes: The Reith",
    author:"Stephen Hawking",
    imglink:"https://m.media-amazon.com/images/I/91elhBJsITL._AC._SR360,460.jpg",
    price:982.5,
}
]

const BookList = () => {
    return (
        <div className='booklist'>
            {/* <Book 
            title={data[0].title}
            author={data[0].author}
            imglink={data[0].imglink}
            price={data[0].price}
             />
             <Book {...data[1]}/>
             <Book {...data[2]}/>
             <Book {...data[3]}/> 
             <Book {...data[4]}/>
             <Book {...data[5]}/> */
             }

             {/* second method
             {data.map((b) => {
                return <Book {...b} />
            })} */}

            {/* another method */}

            {data.map((b) => (
                 <Book {...b} />
            ))}
          
        </div>
    );
}

export default BookList;