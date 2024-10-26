import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getComments } from "../features/comments/comments.api"
import { useParams } from "react-router-dom"

export const CommentList = ()=>{
    const dispatch = useDispatch()
    const {id} = useParams()
    const comments = useSelector(state=>state.comments.items)
    
    useEffect(()=>{
        dispatch(getComments(id))
    },[])
    return <>
    <h3>CommentList</h3>
    {
        comments.map(com=>{
            const filled = new Array(com.rate).fill("https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-512.png")
            return <div key={com.id} style={{padding:5, margin:6, background:"lightgray"}}>
                <p>~{com.text}</p>
                {
                    filled.map((star,index)=> <img key={index} src={star} style={{width:20}}/>)
                }
            </div>
        })
    }
    </>
}