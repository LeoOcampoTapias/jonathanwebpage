import React from 'react'
import './DataStyles.css'
import { RiMentalHealthLine } from "react-icons/ri"

const Data = () => {
  return (
    <div className='data'>
      <div className="container">
        <div className="content">
            <h2><span>Intervencion en crisis</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ad molestiae nulla maiores ipsam assumenda, necessitatibus quae, fuga illo odio nesciunt ea aperiam perspiciatis. Iusto temporibus autem nulla veniam enim.
            Harum eum voluptates totam quo laborum dolore, culpa animi corporis ipsum illo hic magni, sit fugiat quisquam. Deserunt magni magnam harum obcaecati autem sint iure perferendis, tempora repellat optio sit!</p>
            <div>
                <button>
                <RiMentalHealthLine />
                    Conoce mas!
                    
                    </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Data
