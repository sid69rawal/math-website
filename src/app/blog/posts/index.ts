import { BlogPost } from './types';
import { top10MathSkills } from './top-10-math-skills';
import { whyYoungStudentsShouldAvoidCalculators } from './why-young-students-should-avoid-calculators';
import { whyCanadaShouldEmbraceStandardizedTesting } from './why-canada-should-embrace-standardized-testing';
import { whyStudentsStruggleInMath } from './why-students-struggle-in-math';

// Export all blog posts
export const allBlogPosts: BlogPost[] = [
  whyStudentsStruggleInMath,
  whyCanadaShouldEmbraceStandardizedTesting,
  top10MathSkills,
  whyYoungStudentsShouldAvoidCalculators,
];

// Export as a record for easy lookup by slug
export const blogPostsBySlug: Record<string, BlogPost> = allBlogPosts.reduce(
  (acc, post) => {
    acc[post.slug] = post;
    return acc;
  },
  {} as Record<string, BlogPost>
);

// Export individual posts for convenience
export { top10MathSkills, whyYoungStudentsShouldAvoidCalculators, whyCanadaShouldEmbraceStandardizedTesting, whyStudentsStruggleInMath };

