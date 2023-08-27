import React from 'react'

const Card = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
            <div className='w-96 p-8 bg-white rounded-md shadow-md'>
              <h1 className='text-2xl font-semibold mb-4'>Detail Tugas</h1>
              
              <div className='flex flex-row shadow-lg w-full h-full justify-between'> 
              <div>
          <button className=' mx-2 bg-red-600 ' 
          onClick={handleDelete}
          >
            HAPUS
          </button>
          <button className='bg-green-400'
          onClick={handleEdit}
          >
            EDIT
          </button>
          </div>
        </div>
        <div className=''>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4'>
          Tandai Selesai
        </button>
      </div>
    </div>
  )
}

export default Card