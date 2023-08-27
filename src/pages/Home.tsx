import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { TodoistApi } from '@doist/todoist-api-typescript';
import Input from '../components/Input';
import axios from 'axios';
import Swal from 'sweetalert2';

const Home = () => {
  
  const api = new TodoistApi('e02744f11d143996b28db1187d5d867e21f42810');
  const navigate = useNavigate();

  const [content, setContent] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [create, setShowCreate] = useState<string>();
  const [creator_id, setCreator_id] = useState<string>();

  


  const handleSubmit = () => {
    try {
      axios.post(`https://api.todoist.com/rest/v2/tasks`, {
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

  return (
    <section className='flex justify-center items-center w-full h-full shadow-md'>
      <div className='w-96 p-8 bg-[#1450A3] rounded-md'>
        <div className='mb-4'>
          <h1 className='text-2xl font-semibold text-white'>Tambah Tugas Baru</h1>
          <p className='text-white'>Masukkan tugas baru di bawah ini:</p>
        </div>
        <div className='mb-4'>
          <Input
          content='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className='flex justify-between'>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded'
            onClick={handleSubmit}
          >
            Tambah
          </button>
          <button
            className='text-gray-500'
            onClick={() => navigate(`/detail`)} 
          >
            Lihat Daftar Tugas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
