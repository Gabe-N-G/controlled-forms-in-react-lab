import { useState } from 'react';

const Bookshelf = () => {
    
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

    const [newBook, setNewBook] = useState([
        {
            title: "",
            author: ""
        }
    ])  

    const handleInputChange = (e) =>{
        console.log(e.target.value)
        setNewBook({...newBook, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newBook)
        setBooks({...books, newBook})
        setNewBook({title: "", author: ""})
    }

    return  (
        <div className="bookshelfDiv">
            <div className="formDiv">
            <h3>Add a Book</h3>
            {/* Form will go here */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input 
                        id='title'
                        name='title'
                        onChange={handleInputChange}
                    ></input>
                    <label htmlFor="author">Author</label>
                    <input 
                        id='author'
                        name='author'
                        onChange={handleInputChange}
                    ></input>
                    <button type='submit'>Add book</button>
                </form>
            </div>

            <div className="bookCardsDiv">{/* Book cards will display here */}
                {books.map(book =>
                    <>
                        <p>Title: {book.title}</p>
                        <p>Author: {book.author}</p>
                    </>
                )}
            </div>
        </div>
    )
}


export default Bookshelf;