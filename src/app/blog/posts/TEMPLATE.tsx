/**
 * Template for creating a new blog post
 * 
 * Instructions:
 * 1. Copy this file and rename it to match your blog post slug (e.g., "my-new-blog-post.tsx")
 * 2. Update the export name to match your file name (e.g., export const myNewBlogPost)
 * 3. Fill in all the required fields (slug, title, excerpt, date, readTime, content)
 * 4. Import and add your new post to the allBlogPosts array in index.ts
 */

import { BlogPost } from './types';

export const templatePost: BlogPost = {
  slug: 'your-blog-post-slug',
  title: 'Your Blog Post Title',
  excerpt: 'A brief excerpt that will appear on the blog listing page. This should be 1-2 sentences that summarize the main point of your blog post.',
  date: '2025-01-15', // Format: YYYY-MM-DD
  readTime: '5 min read', // Estimated reading time
  content: (
    <div className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Your introduction paragraph goes here. This is the opening of your blog post.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Section Heading</h2>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Your content paragraphs go here.
      </p>

      <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
        <li>Bullet point 3</li>
      </ul>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Your conclusion paragraph goes here.
      </p>
    </div>
  )
};

