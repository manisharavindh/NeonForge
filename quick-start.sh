#!/bin/bash
# NeonForge Quick Start Script
# Run: bash quick-start.sh

echo "🌐 NeonForge - Developer Portfolio Quick Start"
echo "=============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ NPM version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Installation complete!"
echo ""
echo "🚀 Starting development server..."
echo "   The portfolio will open at http://localhost:3000"
echo ""
echo "📝 Next steps:"
echo "   1. Update content in src/sections/ files"
echo "   2. Customize colors in tailwind.config.js"
echo "   3. Replace placeholder images"
echo "   4. Update social links in src/components/Footer.jsx"
echo ""
echo "📚 Documentation:"
echo "   - SETUP.md - Complete setup & customization guide"
echo "   - PROJECT_STRUCTURE.md - Detailed file structure"
echo ""

# Start dev server
npm run dev
