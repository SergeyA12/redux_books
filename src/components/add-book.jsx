import { useForm } from "react-hook-form"
import { addBook } from "../features/books/books.api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AddBook = ()=>{
    const {register, handleSubmit, reset, getValues, formState:{errors}} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = async ()=>{
        const newBook = {
            title:getValues('title'),
            author:getValues('author'),
            rate: null,
            photo:getValues('photo'),
        }
        await dispatch(addBook(newBook)).unwrap()
        reset()
        navigate('/')
        
    }
    return (
        <div className="add-book-container">
            <h3 className="title">Add new Book</h3>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        {...register("title", { required: "Please enter book name", minLength: { value: 1, message: "Write correct book title" } })}
                    />
                    {errors.title && <p className="error-message">{errors.title.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input 
                        type="text" 
                        {...register("author", { required: "Please enter book author", minLength: { value: 6, message: "Write authors full name" } })}
                    />
                    {errors.author && <p className="error-message">{errors.author.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="photo">Photo</label>
                    <input 
                        type="text" 
                        {...register("photo", { required: "Please enter book photo" })}
                    />
                    {errors.photo && <p className="error-message">{errors.photo.message}</p>}
                </div>

                <button className="submit-button" type="submit">Add Book</button>
            </form>
        </div>
    );
}