import { getAllBlogPosts } from '@/lib/blog'

const siteUrl = 'https://3dgryz.ru'

export async function GET() {
  const posts = getAllBlogPosts()

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title.ru}]]></title>
      <link>${siteUrl}/blog/${post.slug}/</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}/</guid>
      <description><![CDATA[${post.excerpt.ru}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>hello@3dgryz.ru (${post.author})</author>
      ${post.coverImage ? `<enclosure url="${siteUrl}${post.coverImage}" type="image/jpeg" />` : ''}
      ${post.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
    </item>`
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Блог 3D.GRYZ</title>
    <link>${siteUrl}/blog/</link>
    <description>Статьи о 3D-графике, маскотах, визуализации и AI в 3D производстве</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>3D.GRYZ</title>
      <link>${siteUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
