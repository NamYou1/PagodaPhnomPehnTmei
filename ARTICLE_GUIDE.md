# Article Page Implementation Guide 📚

## Overview

Your article system now has **two separate pages** with proper routing:

1. **Article List Page** (`/article`) - Shows all articles in a grid
2. **Article Detail Page** (`/article/:id`) - Shows full article content

## File Structure

```
src/
├── components/
│   ├── Data/
│   │   └── articleData.js         # All article data (8 articles)
│   └── Pages/
│       ├── Article.jsx             # Article list page
│       └── ArticleDetail.jsx       # Article detail page
└── App.jsx                         # Router configuration
```

## How It Works

### 1. Article Data (`articleData.js`)

Contains all article information with bilingual content:

```javascript
{
  id: 1,
  title: "English Title",
  titleKm: "ចំណងជើងខ្មែរ",
  excerpt: "Short description",
  excerptKm: "សេចក្តីសង្ខេប",
  content: "Full article content...",
  contentKm: "មាតិកាពេញលេញ...",
  image: "https://...",
  category: "dharma", // or "festival" or "temple-life"
  author: "Author Name",
  date: "2026-01-01",
  readTime: "5 min read"
}
```

### 2. Article List Page (`Article.jsx`)

**Features:**

- 🔍 Search by title (works in both languages)
- 🏷️ Filter by category (All, Dharma, Festival, Temple Life)
- 📱 Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
- 🎨 Hover animations and transitions
- 🌐 Full bilingual support

**How to navigate:**

```javascript
// When user clicks an article card
navigate(`/article/${article.id}`); // Goes to /article/1, /article/2, etc.
```

### 3. Article Detail Page (`ArticleDetail.jsx`)

**Features:**

- 📖 Full article content with featured image
- 👤 Author, date, read time metadata
- 🔙 Back button to return to list
- 📱 Social sharing buttons (Facebook, Twitter)
- 🔗 Related articles section (shows 3 similar articles)
- ✨ Beautiful typography and layout
- 🎯 URL parameters for direct linking

**URL Structure:**

```
/article/1  → Shows article with id: 1
/article/5  → Shows article with id: 5
```

## Routing Setup (`App.jsx`)

```javascript
{
  path: "article",
  element: <Article />        // List page
},
{
  path: "article/:id",        // :id is dynamic parameter
  element: <ArticleDetail />  // Detail page
}
```

## Usage Examples

### Adding New Articles

Edit `src/components/Data/articleData.js`:

```javascript
export const articlesData = [
  // ... existing articles
  {
    id: 9, // New unique ID
    title: "New Article Title",
    titleKm: "ចំណងជើងថ្មី",
    excerpt: "Brief description...",
    excerptKm: "សេចក្តីសង្ខេប...",
    content: "Full article content here...",
    contentKm: "មាតិកាពេញលេញ...",
    image: "https://your-image-url.com/image.jpg",
    category: "dharma",
    categoryKm: "ព្រះធម៌",
    author: "Wat Phnom Penh Tmei",
    authorKm: "វត្តភ្នំពេញថ្មី",
    date: "2026-01-15",
    readTime: "6 min read",
    readTimeKm: "អាន ៦ នាទី",
  },
];
```

### Linking to Articles from Other Pages

```javascript
import { useNavigate } from 'react-router-dom'

const SomeComponent = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/article')}>
      View All Articles
    </button>

    // Or link to specific article
    <button onClick={() => navigate('/article/3')}>
      Read Article #3
    </button>
  )
}
```

### Using Link Component (Alternative)

```javascript
import { Link } from 'react-router-dom'

<Link to="/article" className="btn btn-primary">
  Articles
</Link>

<Link to="/article/5">
  Read Article
</Link>
```

## Categories

Three main categories with bilingual names:

1. **dharma** / **ព្រះធម៌** - Buddhist teachings
2. **festival** / **ពិធីបុណ្យ** - Festival information
3. **temple-life** / **ជីវិតវត្ត** - Temple activities

## Image Recommendations

For best display:

- **List view thumbnails**: 800x600px (4:3 ratio)
- **Detail page hero**: 1200x800px or higher
- Use high-quality images from Unsplash, temple photos, or Buddhist imagery
- Optimize images for web (keep file size under 500KB)

## Navigation Flow

```
Homepage
   ↓
/article (List Page)
   ↓ (Click article)
/article/1 (Detail Page)
   ↓ (Back button)
/article (List Page)
```

## Current Articles (8 Total)

1. Understanding Buddhist Meditation Practices (Dharma)
2. The Significance of Visak Bochea (Festival)
3. Daily Life in a Buddhist Temple (Temple Life)
4. Kathina Ceremony: A Time of Giving (Festival)
5. The Four Noble Truths Explained (Dharma)
6. Meak Bochea: The Day of Purification (Festival)
7. Buddhist Ethics and the Five Precepts (Dharma)
8. Temple Construction and Community Support (Temple Life)

## Features Summary

✅ Separate list and detail pages with URLs
✅ Search functionality
✅ Category filtering
✅ Bilingual (English/Khmer)
✅ Responsive design
✅ Beautiful images
✅ Related articles
✅ Social sharing buttons
✅ Author and metadata display
✅ Smooth animations
✅ Back navigation
✅ SEO-friendly URLs

## Tips

1. **Adding Images**: Use free stock photos from Unsplash or upload temple photos
2. **SEO**: Each article has its own URL (great for sharing!)
3. **Performance**: Images are lazy-loaded automatically by browser
4. **Mobile**: Design is fully responsive, looks great on all devices
5. **Accessibility**: Use descriptive alt text for images

## Testing

Visit these URLs:

- `http://localhost:5173/article` - Article list
- `http://localhost:5173/article/1` - First article
- `http://localhost:5173/article/2` - Second article
- etc.

---

**Need Help?**

- Add more articles: Edit `articleData.js`
- Change styling: Update className in components
- Add features: Modify `Article.jsx` or `ArticleDetail.jsx`
