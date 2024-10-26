import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getBook } from "../features/books/books.api"
import { addComment } from "../features/comments/comments.api"
import Modal from '@mui/material/Modal';

export const BookItem = ()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const current = useSelector(state => state.books.current)
    
    const [open, setOpen] = useState(false)
    const [comment, setComment] = useState("")
    const [rate,setRate] = useState()

    useEffect(()=>{
        dispatch(getBook(id))
    },[id])

    const handleOpen = () => setOpen(true)
    const handleClose = () => { 
        setOpen(false)
        setComment('')
    }
    const handleAddComment = async ()=>{
        const newCom= {
            text: comment,
            rate: rate | null,
            book: current.id
          }
        await dispatch(addComment(newCom)).unwrap()
        handleClose()
    }

    return <>
    <h3>Book Item</h3>
    {
        current && <div>
            <img src={current.photo} style={{height:300}}/>
            <p>{current.title}</p>
            <strong>by {current.author}</strong>
        </div>
    }
    
    <div>
            <div>
            <button onClick={handleOpen}>create comment</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                
                <div style={{ padding: 20, backgroundColor: '#fff', borderRadius: '8px', background:'mediumpurple'}}>
                    <input type="text" value={comment} onChange={e=>setComment(e.target.value)} />
                    <select
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className="styled-select"
                        >   <option value={null}></option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    <button onClick={handleAddComment}>add comment</button>
                </div>
            </Modal>
        </div>
        </div>
    </>
}