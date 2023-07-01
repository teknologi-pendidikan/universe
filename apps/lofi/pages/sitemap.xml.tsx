import { getPostData } from 'utils/postData'
const URL = 'https://lofi.teknologipendidikan.or.id'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
      <!-- Static Pages URLs -->
      <url>
        <loc>${URL}</loc>
      </url>
      <!-- Dynamic URLs of News Articles -->
        ${posts
          .map((post) => {
            return `
            <url>
                <loc>${URL}/${post.slug}</loc>
                <news:news>
                <news:publication>
                    <news:name>The Example Times</news:name>
                    <news:language>id</news:language>
                </news:publication>
                <news:publication_date>${post.date}</news:publication_date>
                <news:title>${post.title}</news:title>
                </news:news>
                <lastmod>${post.date}</lastmod>
            </url>
            `
          })
          .join('')}
    </urlset>
  `
}

export async function getServerSideProps({ res }) {
  const posts = getPostData()

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(posts.POSTLIST)

  res.setHeader('Content-Type', 'text/xml')
  // Send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function SitemapXml() {}
