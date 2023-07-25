import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'rzfwqazu',
  dataset: 'production',
  useCdn: true, 
});