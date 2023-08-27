import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';  
import { useState } from 'react';


interface Detail {
  id?:string;
  content?: string;
  description?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler;
}



const Detail = () => {

  const [content, setContent] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [data, setData] = useState<string>('');

  const getData = () => {
    axios
      .get("https://api.todoist.com/rest/v2/tasks", {
        headers: {
          Authorization: `Bearer e02744f11d143996b28db1187d5d867e21f42810` ,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    try {
      axios.post(`https://api.todoist.com/rest/v2/tasks/2995104339`, {
        content: content
      },
        {
          headers: {
            Authorization: `Bearer e02744f11d143996b28db1187d5d867e21f42810`
          }
        }).then((res) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Why do I have this issue?'
          })
        })
    } catch (error: any) {
      console.log(error)
    }
  }

  const handleEdit = () => {
    try {
      axios.post(`https://api.todoist.com/rest/v2/tasks/2995104339`, {
        content: content
      },
        {
          headers: {
            Authorization: `Bearer e02744f11d143996b28db1187d5d867e21f42810`
          }
        }).then((res) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Why do I have this issue?'
          })
        })
    } catch (error: any) {
      console.log(error)
    }
  }
  getData()
  
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
  );
};

export default Detail;
