import React, { useContext } from 'react'
import { FormContext } from '../index'

const Form = () => {

    const {handleChange, handleSubmit, input} = useContext(FormContext)

    return (
        <div className="text-center w-full">
        <form className="w-full md:w-1/2 m-auto p-10 text-black" onSubmit={handleSubmit}>
            <input
                className="mb-2 px-5 py-2 rounded outline-none w-full border-2"
                type="text"
                placeholder="Headline..."
                name="name"
                onChange={handleChange}
                value={input.name}/>
            <select
                className="mb-2 px-5 py-2 rounded w-full outline-none border-2"
                name="status"
                onChange={handleChange}
                value={input.status}>
                <option>New</option>
                <option>Pending</option>
            </select>
            <input
                className="mb-2 px-5 py-2 rounded w-full outline-none border-2"
                type="text"
                name="author"
                placeholder="Author..."
                onChange={handleChange}
                value={input.author}/>
            <textarea
                name="info"
                placeholder='Info about...'
                className="rounded w-full outline-none px-5 py-2 border-2"
                onChange={handleChange}
                value={input.info}></textarea>
            <textarea
                name="text"
                style={{
                height: "300px"
            }}
                placeholder='Text...'
                className="rounded w-full outline-none px-5 py-2 border-2"
                onChange={handleChange}
                value={input.text}></textarea>
            <button
                className="bg-teal-700 text-white hover:bg-teal-900 w-full rounded px-5 py-2">
                Send
            </button>
        </form>
        </div>
    )
}

export default Form