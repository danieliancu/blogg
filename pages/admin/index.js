import React, {useState, createContext} from 'react'
import {Layout} from 'import/components/Layout'
import Form from './components/form'
import Posts from './components/posts'



export const FormContext = createContext()
export const PostContext = createContext()

const index = () => {


    const [input, setInput] = useState({
        name: "",
        status: "new",
        author: "",
        info: "",
        text: ""
    })

    const [posts, setPosts] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        setInput(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.name.trim()) {
            setPosts([...posts, input])
            setInput({name: "", status: "new", author: "", info: "", text: ""})
        }
    }

    const handleDelete = (id) => {
        const newPost = posts.filter(item=>item!==id)
        setPosts(newPost)
        console.log(id)
    }



    return (
        <Layout>
            <FormContext.Provider value={{handleChange, handleSubmit, input}}>
                <PostContext.Provider value={{handleDelete}}>
                    <Form />
                    <Posts posts={posts} />
                </PostContext.Provider>
            </FormContext.Provider>
        </Layout>
    )
}

export default index