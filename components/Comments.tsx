'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

type Input = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

type Props = {
  post: Post;
};

const Comments = ({ post }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  // Handles the form submit
  const onSubmit: SubmitHandler<Input> = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        toast.success(
          'Your comment has been submitted and is awaiting approval'
        );
      })
      .catch((error: any) => {
        toast.error(error.message);
        return;
      });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col p-5 my-10 max-w-2xl mx-auto mb-10'
        >
          <h3 className='text-base text-[#E7493F]'>Enjoyed This Article?</h3>
          <h3 className='text-3xl- font-bold'>Leave a Comment</h3>
          <hr className='py-3 mt-2'></hr>
          <div className='block mb-5'>
            <label htmlFor='commentName'>Name</label>
            <input
              id='commentName'
              {...register('name', { required: true })}
              className='shadow border border-b-gray-200 bg-transparent rounded py-2 px-3  mt-1 block w-full'
              placeholder='John Doe'
              type='text'
              autoComplete='off'
            />
          </div>
          <div className='block mb-5'>
            <label htmlFor='emailField'>Email</label>
            <input
              id='emailField'
              {...register('email', { required: true })}
              className='shadow border border-b-gray-200 bg-transparent rounded py-2 px-3  mt-1 block w-full'
              placeholder='johndoe@gmail.com'
              type='email'
              autoComplete='off'
            />
          </div>
          <div className='block mb-5'>
            <label htmlFor='commentField'>Comment</label>
            <textarea
              id='commentField'
              {...register('comment', { required: true })}
              className='shadow border border-b-gray-200 bg-transparent rounded py-2 px-3  mt-1 block w-full'
              placeholder='Your comment...'
              rows={8}
            />
          </div>
          <div className='flex flex-col'>
            {errors.name && (
              <span className='text-red-500'>The Name Field Is Required</span>
            )}
            {errors.email && (
              <span className='text-red-500'>The Email Field Is Required</span>
            )}
            {errors.comment && (
              <span className='text-red-500'>
                The Comments Field Is Required
              </span>
            )}
          </div>

          <input
            id='commentID'
            {...register('_id')}
            type='hidden'
            name='_id'
            value={post._id}
          />

          <label>
            <input
              type='submit'
              id='btnSubmit'
              className='shadow bg-[#e74a3fab] hover:bg-[#E7493F] focus:shadow-outline 
          focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer'
            />
          </label>
        </form>
        {/* For Displaying Comments */}
        <div className='flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-[#E7493F]  shadow space-y-2'>
          <h1 className='text-4xl'>Comments</h1>
          <hr className='pb-2' />

          {post.comments.length < 1 ? (
            <p>Be the first to comment </p>
          ) : (
            <div className='divide-y'>
              {post.comments.map((comment: any) => (
                <div key={comment._id} className='p-5'>
                  <p className='text-[#E7493F] text-base font-bold'>
                    {comment.name}
                  </p>
                  <p className='text-gray-500 text-[12px]'>
                    {new Date(comment._createdAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <p className='mt-3'>{comment.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
