# 🚀 NeonForge - Complete Installation & Usage Guide

## What You've Got

A **production-ready React + Vite portfolio** with:
- ✅ 7 complete sections (Hero, About, Skills, Projects, Experience, Achievements, Contact)
- ✅ 6 reusable components (Navbar, Button, Card, Badge, SectionHeader, Footer)
- ✅ Cyberpunk dark theme with neon accents
- ✅ Fully responsive design
- ✅ Smooth animations and transitions
- ✅ Contact form with validation
- ✅ Production-ready optimization

**24 files ready to use immediately!**

---

## 📦 Installation (5 minutes)

### Step 1: Prerequisites Check
```bash
# Verify Node.js and npm are installed
node --version  # Should be 16+
npm --version   # Should be 8+
```

If not installed, download from [nodejs.org](https://nodejs.org)

### Step 2: Install Dependencies
```bash
cd /Users/manish/Documents/GitHub/NeonForge
npm install
```

This will install:
- React 18.2
- Vite 5.0
- Tailwind CSS 3.3
- PostCSS & Autoprefixer

**Installation time: ~2-3 minutes**

### Step 3: Start Development Server
```bash
npm run dev
```

✅ **Browser will open automatically at `http://localhost:3000`**

---

## 🎨 Customization Guide (30 minutes)

### Priority 1: Update Personal Information (Essential)

**1. Hero Section** - `src/sections/Hero.jsx` (Line 30-35)
```javascript
// Change these lines:
<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
  <span className="text-glow">Building Digital</span>
  <br />
  <span className="text-white">Experiences That Matter</span>
</h1>

<p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
  AI/ML Engineer & Full-Stack Developer passionate about creating innovative solutions...
</p>
```

**2. Footer Social Links** - `src/components/Footer.jsx` (Line 15-25)
```javascript
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/YOUR-USERNAME',  // Update this
    icon: '🔗',
  },
  // ... update other links
]
```

**3. About Section** - `src/sections/About.jsx` (Line 45-55)
```javascript
<p className="text-gray-300 text-lg leading-relaxed mb-4">
  I'm a passionate AI/ML Engineer and Full-Stack Developer...
  [UPDATE YOUR BIO HERE]
</p>
```

### Priority 2: Update Skills & Experience (Important)

**4. Skills Section** - `src/sections/Skills.jsx` (Line 10-30)
```javascript
const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],  // Update these
    color: 'green',
  },
  // ... add/remove categories as needed
]
```

**5. Projects Section** - `src/sections/Projects.jsx` (Line 15-50)
```javascript
const projects = [
  {
    id: 1,
    title: 'AI-Powered Chatbot Platform',  // Update title
    description: 'An advanced conversational AI platform...',  // Update description
    tags: ['Python', 'FastAPI', 'React', 'OpenAI', 'Vector DB'],  // Update tech
    image: '💬',  // Update emoji
    liveUrl: 'https://your-project.com',  // Update URL
    githubUrl: 'https://github.com/...',  // Update URL
  },
  // ... add more projects
]
```

**6. Experience Section** - `src/sections/Experience.jsx` (Line 10-35)
```javascript
const experiences = [
  {
    role: 'Senior AI/ML Engineer',  // Update role
    company: 'TechCorp AI Solutions',  // Update company
    duration: '2022 - Present',  // Update dates
    description: 'Leading AI/ML projects...',  // Update description
    highlights: ['Led 5+ AI projects', 'Improved accuracy by 23%'],  // Update achievements
    icon: '🎯',  // Update emoji
  },
  // ... add more experiences
]
```

### Priority 3: Update Achievements (Recommended)

**7. Achievements Section** - `src/sections/Achievements.jsx` (Line 10-35)
```javascript
const achievements = [
  {
    icon: '🏆',
    title: 'Tech Innovator Award',  // Update title
    organization: 'Annual Tech Summit 2023',  // Update org
    description: 'Recognized for innovative AI solutions...',  // Update description
  },
  // ... add your achievements
]
```

### Priority 4: Customize Theme (Optional but Recommended)

**8. Color Scheme** - `tailwind.config.js` (Line 8-22)
```javascript
colors: {
  neon: {
    green: '#00ff41',    // Change to custom green
    teal: '#00d9ff',     // Change to custom teal
    purple: '#d946ef',   // Change to custom purple
    pink: '#ec4899',     // Change to custom pink
  },
  cyberpunk: {
    dark: '#0a0e27',     // Change dark background
    darker: '#050812',   // Change darker background
    card: '#0f1628',     // Change card background
  }
}
```

---

## 🖼️ Add Images & Assets

### Replace Placeholder Images

1. **Create `public` folder structure:**
```bash
mkdir -p public/images
```

2. **Add your images:**
```
public/
├── images/
│   ├── hero-illustration.png
│   ├── profile-photo.jpg
│   ├── project-1.png
│   └── project-2.png
```

3. **Update section files to use images** (Example for About):
```javascript
// In src/sections/About.jsx, replace line with img tag:
<img 
  src="/images/profile-photo.jpg" 
  alt="Profile"
  className="w-64 h-64 rounded-full object-cover border-4 border-neon-green"
/>
```

---

## 📝 Form Integration

### Option A: Send to Email Service (Recommended)

**Using EmailJS (Free tier available):**

1. Sign up at https://www.emailjs.com
2. Get your Service ID, Template ID, Public Key
3. Update `src/sections/Contact.jsx`:

```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: 'your-email@example.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    )
    
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setLoading(false)
  }
}
```

4. Install dependency:
```bash
npm install @emailjs/browser
```

### Option B: Send to Your Backend

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }
  } finally {
    setLoading(false)
  }
}
```

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

This creates an optimized `dist/` folder (~50KB gzipped)

### Deploy Options

**1. Vercel (Recommended - 1 minute)**
```bash
npm i -g vercel
vercel
# Follow prompts, done!
```

**2. Netlify**
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**3. GitHub Pages**
```bash
npm run build
# Push dist folder to gh-pages branch
```

**4. Traditional Hosting**
- Upload `dist/` folder to your web host
- Set index.html as default file
- Enable gzip compression

---

## 📱 Testing

### Desktop Testing
```bash
npm run dev
# Open http://localhost:3000
# Test all sections, buttons, animations
```

### Mobile Testing
```bash
# Get your local IP
ipconfig getifaddr en0  # macOS
# Visit http://YOUR-IP:3000 on mobile
```

### Build Testing
```bash
npm run build
npm run preview
# Opens production build at http://localhost:4173
```

---

## 🔧 Common Customizations

### Change Navigation Items
**File:** `src/components/Navbar.jsx` (Line 13-20)
```javascript
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
]
```

### Change Button Styles
**File:** `src/components/Button.jsx` (Line 20-30)
```javascript
const variantStyles = {
  primary: 'bg-neon-green text-cyberpunk-dark hover:shadow-neon-green...',
  secondary: 'border-2 border-neon-green text-neon-green...',
  outline: 'border-2 border-neon-teal text-neon-teal...',
  ghost: 'text-neon-green hover:bg-neon-green/10...',
}
```

### Add New Section
1. Create `src/sections/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add to JSX rendering

---

## 📊 Project File Count

**Total: 24 Production-Ready Files**
- 5 Config files
- 2 Styling files
- 2 Core app files
- 6 Components
- 7 Sections
- 3 Documentation files

---

## ✅ Pre-Launch Checklist

- [ ] Updated personal information in all sections
- [ ] Changed social media links
- [ ] Added profile image
- [ ] Added project images
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested form submission
- [ ] Built for production: `npm run build`
- [ ] Deployed to hosting
- [ ] Tested live site
- [ ] Added to GitHub

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- --port 3001` |
| Module not found | `rm -rf node_modules && npm install` |
| Styles not loading | Clear browser cache (Ctrl+Shift+Delete) |
| Build failed | `npm run build -- --force` |
| Hot reload not working | Restart dev server |

---

## 📚 Documentation Links

- **Full Setup Guide** - See `SETUP.md`
- **Project Structure** - See `PROJECT_STRUCTURE.md`
- **Tailwind Docs** - https://tailwindcss.com
- **React Docs** - https://react.dev
- **Vite Docs** - https://vitejs.dev

---

## 🎉 You're Ready!

1. ✅ All files are in place
2. ✅ Run `npm install` then `npm run dev`
3. ✅ Customize content
4. ✅ Deploy!

**Happy coding! 🚀✨**

---

**Questions?** Check SETUP.md or PROJECT_STRUCTURE.md for detailed information.
