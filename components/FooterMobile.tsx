/* eslint-disable */
import React from 'react';
import Image from 'next/image';
import FooterImg from '../public/assets/footer.jpg';

const FooterMobile = () => {
  return (
    <div className='mt-10 text-white text-center'>
      <div className='relative py-10 w-full bg-cover bg-center bg-no-repeat'>
        <div className='absolute inset-0 -z-10'>
          <Image
            src={FooterImg}
            fill
            alt='footer image'
            className='object-cover object-center brightness-50'
          ></Image>
        </div>
        <div className='divide-y-2 mx-10'>
          <div className='pb-5'>
            <h2 className='font-semibold pb-3'>EXPLORE</h2>
            <p>Journeys</p>
            <p>Places</p>
            <p>Channels</p>
            <p>Editor's Pick</p>
          </div>

          <h2 className='font-semibold py-5'>NAVIGATE</h2>
          <h2 className='font-semibold py-5'>TOP CITIES</h2>
          <h2 className='font-semibold py-5'>CITY BREAKS</h2>
          <h2 className='font-semibold py-5'>MORE TRAVEL</h2>
          <h2 className='font-semibold py-5'>COMMUNITY</h2>

          {/* for subscribe to newsletter */}
          <div className='pt-7 pb-7'>
            <h3 className='font-semibold mb-3 text-center'>
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <div className='flex flex-row mb-6'>
              <div className='relative mb-6'></div>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-50 dark:text-gray-50'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 16'
                >
                  <path
                    d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 
                       0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z'
                  />
                  <path
                    d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428
                       0-.845-.138-1.187-.395L0 2.6V14a2 
                       2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z'
                  />
                </svg>
              </div>
              <label>
                <input
                  type='text'
                  id='input-group-2'
                  className='bg-transparent border border-gray-300
                    text-gray-50  text-sm rounded-lg block w-full ps-10 p-2.5'
                  placeholder='zgbo@gmail.com'
                />
              </label>
              <label>
                <button
                  type='submit'
                  className='text-black
                 bg-gray-50 hover:bg-gray-100 focus:ring-1 
                  focus:outline-none focus:ring-gray-100 font-medium rounded-md 
                  text-sm sm:w-auto px-5  py-1 text-center h-10 ml-2'
                >
                  Submit
                </button>
              </label>
            </div>
          </div>
          <div className='py-5'>
            <h3 className='font-semibold mb-3 text-center'>FOLLOW US</h3>
            <div className=' flex items-center gap-6 justify-center'>
              <a href='#!' role='button'>
                {/* Facebook */}
                <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                    <path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' />
                  </svg>
                </span>
              </a>

              <a href='#!' role='button'>
                {/* <!-- Instagram --> */}
                <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                  </svg>
                </span>
              </a>

              <a href='#!' role='button'>
                {/* <!-- Google --> */}
                <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ea4335]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488 512'>
                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                    <path d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z' />
                  </svg>
                </span>
              </a>

              <a href='#!' role='button'>
                <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 512 512'
                  >
                    {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
