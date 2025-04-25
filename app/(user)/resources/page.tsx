// app/(user)/resources/page.tsx
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

// Define the Resource interface
interface Resource {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  affiliateLink: string;
}

// Resource Card Component with explicit type annotation
const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full'>
      {/* Image Placeholder */}
      <div className='h-48 relative bg-gray-100'>
        {resource.imageUrl ? (
          <Image
            src={resource.imageUrl}
            alt={resource.title}
            width={400}
            height={300}
            style={{ objectFit: 'cover' }}
            className='h-full w-full'
          />
        ) : (
          <div className='flex items-center justify-center h-full'>
            <svg
              className='w-16 h-16 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </div>
        )}
      </div>

      {/* Description Area */}
      <div className='p-5 flex-grow'>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>
          {resource.title}
        </h3>
        <p className='text-gray-600 text-sm mb-4'>{resource.description}</p>
      </div>

      {/* Affiliate Link */}
      <div className='p-5 pt-0'>
        <a
          href={resource.affiliateLink}
          target='_blank'
          rel='noopener noreferrer'
          className='block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800'
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

// This is a Server Component that fetches data
async function ResourcesPage() {
  // Fetch resources from Sanity by category
  const toolResources: Resource[] = await client.fetch(`
    *[_type == "resource" && category == "tools"] {
      _id,
      title,
      description,
      category,
      "imageUrl": image.asset->url,
      affiliateLink
    } | order(_createdAt desc) [0...4]
  `);

  const bookResources: Resource[] = await client.fetch(`
    *[_type == "resource" && category == "books"] {
      _id,
      title,
      description,
      category,
      "imageUrl": image.asset->url,
      affiliateLink
    } | order(_createdAt desc) [0...4]
  `);

  const serviceResources: Resource[] = await client.fetch(`
    *[_type == "resource" && (category == "services" || category == "courses")] {
      _id,
      title,
      description,
      category,
      "imageUrl": image.asset->url,
      affiliateLink
    } | order(_createdAt desc) [0...4]
  `);

  return (
    <div className='min-h-screen bg-white'>
      {/* Main Content Area */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Recommended Resources
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            A curated collection of tools, books, and services that can help
            financial advisors leverage AI insights.
          </p>
          <p className='text-sm text-gray-500 mt-4'>
            <em>
              Disclosure: Some links below are affiliate links, which means I
              may earn a commission if you make a purchase.
            </em>
          </p>
        </div>

        {/* Tools Section */}
        <section className='mb-20'>
          <h2 className='text-3xl font-bold text-blue-900 mb-8 border-b border-gray-200 pb-2'>
            Tools & Software
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {toolResources.map((resource) => (
              <ResourceCard key={resource._id} resource={resource} />
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section className='mb-20'>
          <h2 className='text-3xl font-bold text-blue-900 mb-8 border-b border-gray-200 pb-2'>
            Books & Publications
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {bookResources.map((resource) => (
              <ResourceCard key={resource._id} resource={resource} />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-blue-900 mb-8 border-b border-gray-200 pb-2'>
            Services & Courses
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {serviceResources.map((resource) => (
              <ResourceCard key={resource._id} resource={resource} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResourcesPage;
