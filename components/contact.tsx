'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    >
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-2 block text-base font-medium text-black'
        >
          Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-5 text-base font-medium text-gray-700 outline-none focus:border-amber-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-2 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='name@example.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-5 text-base font-medium text-gray-700 outline-none focus:border-amber-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-2 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={6}
          placeholder='Type your message'
          className='w-full resize-none min-h-[auto] rounded-md border border-gray-300 bg-white py-3 px-5 text-base font-medium text-gray-700 outline-none focus:border-amber-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className='flex justify-end'>
        <button className='hover:shadow-form w-full rounded-lg bg-amber-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;