import React, {useContext} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {PostContext} from '../index'

const Posts = ({posts}) => {

    const {handleDelete} = useContext(PostContext)

    return (
        <div className="m-auto w-full md:w-1/2 p-10">
            {posts.map((item, index) => <div
                key={index}
                className='bg-gray-300 py-3 px-5 mt-2 rounded flex justify-between items-center'>
                <div> {item.name} </div>
                <div>
                    <span className="ico">{item.status}</span>
                    <AiFillDelete
                        style={{color: "red",display: "inline-block"}}
                        onClick={() => handleDelete(item)}/>
                </div>
            </div>)}
        </div>
    )
}

export default Posts