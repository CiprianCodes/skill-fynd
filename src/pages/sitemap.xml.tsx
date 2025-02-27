import { GetServerSideProps } from 'next';

// This generates a dynamic sitemap
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://skillfynd.vercel.app';
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <!-- Add more URLs as needed -->
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

// The component is never used because the response is sent above
const Sitemap = () => null;
export default Sitemap;
