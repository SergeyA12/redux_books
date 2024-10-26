import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "./books.api"
import { Link, useNavigate } from "react-router-dom"

export const Books = () => {
    const books = useSelector(state => state.books.list)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getBooks())
    },[])
    
    return <>
        <h3>Books {books.length}</h3>
        {
            books.map(book=>
                <div key={book.id}>
                    <img src={book.photo} style={ {width:150, height:200} }/>
                    <p>{book.title}</p>
                    <Link to={'/book/' + book.id}>comments</Link>
                </div>
            )
        }
            <button onClick={()=>navigate('/add')}>add new book</button>

    </>
}