import { useState } from "react"
import { ref } from 'firebase/storage'

const AddPosts = ({onSubmitPost}) => {
    const [title, setTitle] = useState("")
    const [tree, setTree] = useState("")
    const [imageURL, setImageURL] = useState("")

    const handleImageChange = (e) => {
        setImageURL(e.target.files[0])
    }

    const localOnSubmitPost = () => {
        onSubmitPost(title, tree, imageURL);
        setTitle("");
        setTree("");
        setImageURL("");
    }

    return (
        <div className="add-posts-container">
            <input className="title-add-posts-container" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className="tree-add-posts-container" type="text" placeholder="Type of tree" value={tree} onChange={(e) => setTree(e.target.value)} />
            <input className="file-add-posts-container" id="image-upload" type="file" onChange={(e) => handleImageChange(e)} />
            <label className="label-add-posts-container" htmlFor="image-upload">Add File</label>
            <img src={imageURL} style={{maxWidth: "100px"}} />
            <button className="submit-button" onClick={() => (title && tree && imageURL) && localOnSubmitPost()}>Make a Post ↟</button>
        </div>
    )
}

export default AddPosts;