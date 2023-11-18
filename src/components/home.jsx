import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { db, storage } from "../firebase-config"
import { doc, deleteDoc, getDocs, collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage"
import AddPosts from "./addPosts"
import Posts from "./posts"


const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    const postsCollectionsRef = collection(db, "Posts")


    useEffect(() => {
        const getPostsList = async () => {
          try {
            const data = await getDocs(postsCollectionsRef);
            const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setLoading(false);
            setPosts(filteredData);
          } catch (err) {
            console.log(err);
            setLoading(false);
          }
        }

        getPostsList();
    }, []);

    const onSubmitPost = async (inputTitle, inputTree, inputImageURL) => {

        const storageRef = ref(storage, `/images/${Date.now()}${inputImageURL.name}`)

        const uploadImage = uploadBytesResumable(storageRef, inputImageURL)
        uploadImage.on("state_changed", (snapshot) => {
            const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(progressPercent);
        },
        (err) => {
            console.log(err);
        },
        () => {
            getDownloadURL(uploadImage.snapshot.ref)
            .then((url) => {
                const postRef = collection(db, "Posts")
                addDoc(postRef, {
                    title: inputTitle,
                    likes: 0,
                    tree: inputTree,
                    timePosted: Timestamp.now().toDate(),
                    imageURL: url
                })
            })

        });
    }

    const deleteButton = async (id, imageURL) => {
        try {
            await deleteDoc(doc(db, "Posts", id))
            const storageRef = ref(storage, imageURL)
            await deleteObject(storageRef)
            setPosts(posts.filter((currPost) => {
                return id !== currPost.id;
            }))
        } catch (err) {
            console.log (err);
        }
    }
    return (
                <Routes>
                    <Route path="/add" element={
                            <AddPosts onSubmitPost={onSubmitPost} />
                        
                    }/>
                    <Route path="/" element={
                        <>
                            {!loading ? <Posts postsList={posts} deleteButton={deleteButton}/> : 
                            <div className="loading-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                                    <rect x="90" y="140" width="20" height="40" fill="#623321"></rect>

                                    <polygon points="100,120 80,140 120,140" id="tree"></polygon>
                                    <polygon points="100,100 90,120 110,120" id="tree"></polygon>
                                    <polygon points="100,80 95,100 105,100" id="tree"></polygon>
                                </svg>
                                <h1>Loading . . .</h1>
                            </div>}
                        </>
                    }/>
                </Routes>
    )
}

export default Home;