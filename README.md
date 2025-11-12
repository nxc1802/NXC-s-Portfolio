# NXC's Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **SEO Optimized**: Complete metadata and Open Graph tags
- **Performance**: Optimized for fast loading and smooth scrolling
- **Modular Architecture**: Easy to customize and extend

## 📋 Sections

1. **Hero Section** - Introduction with profile image and social links
2. **About Me** - Educational background and achievements timeline
3. **Tech Stack** - Technologies and tools organized by category
4. **Projects** - Featured projects with live demos and GitHub links
5. **Testimonials** - Recommendations from mentors and colleagues
6. **Contact** - Social links and contact information

## 🛠️ Tech Stack

### Frontend
- React 19
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

### Tools & Libraries
- React Icons
- Next.js Image Optimization
- CSS Custom Properties

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📝 Customization

### Update Personal Information

1. **Profile Data**: Edit `data/profile.json`
   - Name, title, location
   - Bio and tagline
   - Social links
   - Resume link

2. **Projects**: Edit `data/projects.json`
   - Add/remove projects
   - Update project details
   - Change demo and repository links

3. **Tech Stack**: Edit `data/techstack.json`
   - Add/remove technologies
   - Organize by category

4. **Timeline**: Edit `data/timeline.json`
   - Update education history
   - Add/modify achievements

5. **Testimonials**: Edit `data/testimonials.json`
   - Add testimonials from mentors or colleagues

### Customize Colors

The color scheme can be customized in:
- `tailwind.config.ts` - Main color palette
- `app/globals.css` - CSS custom properties

### Add Profile Image

1. Add your profile image to `public/images/profile.jpg`
2. The Hero section will automatically use this image

### Add Project Images

1. Add project screenshots to `public/images/projects/`
2. Update the image paths in `data/projects.json`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

### Environment Variables

If you add any API integrations, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Section.tsx
│   └── Navbar.tsx
├── sections/              # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── data/                  # JSON data files
│   ├── profile.json
│   ├── projects.json
│   ├── techstack.json
│   ├── timeline.json
│   └── testimonials.json
├── public/                # Static assets
│   └── images/
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Customization Guide

### Adding a New Section

1. Create a new component in `sections/`
2. Import it in `app/page.tsx`
3. Add a corresponding entry in the Navbar

### Changing Animations

Edit animation properties in section components using Framer Motion:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>
```

### Adding Icons

This project uses `react-icons`. To add new icons:

```tsx
import { FaYourIcon } from 'react-icons/fa';
```

Browse available icons at [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**NXC**
- GitHub: [@nxc1802](https://github.com/nxc1802)
- LinkedIn: [Cuong Nguyen](https://www.linkedin.com/in/cuong-nguyen-2715a136b/)
- Email: nxcforwork@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and TypeScript
