// app/(user)/contact/page.tsx
'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You can replace this with your actual form submission logic
      // For example, sending to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Main Content Area */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='max-w-2xl mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Get In Touch
            </h1>
            <p className='text-xl text-gray-600'>
              Have questions about AI for financial advisors? I'm here to help.
            </p>
          </div>

          {/* <div className='bg-white shadow rounded-lg overflow-hidden'>
            <div className='p-8'>
              {submitStatus === 'success' ? (
                <div className='text-center py-12'>
                  <svg
                    className='mx-auto h-12 w-12 text-green-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <h3 className='mt-4 text-lg font-medium text-gray-900'>
                    Thank you for your message!
                  </h3>
                  <p className='mt-2 text-gray-600'>
                    I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className='mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-900 bg-blue-100 hover:bg-blue-200'
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Message
                    </label>
                    <textarea
                      name='message'
                      id='message'
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                  </div>

                  <div className='flex justify-end'>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50'
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  {submitStatus === 'error' && (
                    <div className='text-red-600 text-sm mt-2'>
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div> */}

          {/* Alternative contact methods */}
          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='text-center p-6 bg-gray-50 rounded-lg'>
              <svg
                className='mx-auto h-8 w-8 text-blue-900'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              <h3 className='mt-4 text-lg font-medium text-gray-900'>Email</h3>
              <p className='mt-2 text-blue-900'>terry@wrigtail.com</p>
            </div>

            <div className='text-center p-6 bg-gray-50 rounded-lg'>
              <svg
                className='mx-auto h-8 w-8 text-blue-900'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
              <h3 className='mt-4 text-lg font-medium text-gray-900'>Phone</h3>
              <p className='mt-2 text-blue-900'>+447842024151</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
