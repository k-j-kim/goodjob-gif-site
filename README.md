# Good Job! GIF Site 🎉

A simple, beautiful web application that displays random "Good Job" GIFs each time you load the page. Perfect for celebrating wins, boosting morale, or just having fun!

## ✨ Features

- 🎲 Random "Good Job" GIF on every page load
- 🔄 Click to get another random GIF
- 🎨 Beautiful gradient UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast loading with Vite
- 🚀 Easy deployment to GitHub Pages

## 🖼️ Preview

The site displays a random "Good Job" themed GIF from Giphy with a beautiful, modern interface featuring:
- Gradient background (purple to pink to red)
- Smooth animations and hover effects
- Clean, card-based design
- Loading spinner while fetching GIFs

## 🛠️ Technologies

- **React** - UI framework
- **Vite** - Build tool
- **Axios** - HTTP requests
- **Tailwind CSS** - Styling
- **Giphy API** - GIF source

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/goodjob-gif-site.git
cd goodjob-gif-site
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Get your own Giphy API key:
   - Visit [Giphy Developers](https://developers.giphy.com/)
   - Create an account and get an API key
   - Copy `.env.example` to `.env`
   - Add your API key to `.env`:
     ```
     VITE_GIPHY_API_KEY=your_api_key_here
     ```
   
   **Note:** The app includes a default API key for testing, but for production use, please get your own key.

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deploying to GitHub Pages

### First-time Setup

1. Update the `base` path in `vite.config.js`:
   ```javascript
   base: '/your-repo-name/'
   ```
   Replace `your-repo-name` with your actual GitHub repository name.

2. Make sure you have committed all your changes:
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

3. Create a GitHub repository and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/goodjob-gif-site.git
   git branch -M main
   git push -u origin main
   ```

### Deploy

Run the deploy command:
```bash
npm run deploy
```

This will:
- Build your app
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

### Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/goodjob-gif-site/`

## 📝 Usage

- **Automatic Load**: A random "Good Job" GIF loads automatically when you visit the site
- **Manual Refresh**: Click the "🎲 Show Another!" button to load a new random GIF
- **Share**: Share the URL with friends to spread positivity!

## 🎨 Customization

### Change the GIF Tag

Edit `src/api/giphy.js` and change the `tag` parameter:
```javascript
const url = `${BASE_URL}/random?api_key=${API_KEY}&tag=your-custom-tag&rating=g`;
```

### Modify Colors

Edit `src/App.jsx` and change the Tailwind CSS classes:
```javascript
// Change background gradient
<div className="min-h-screen bg-gradient-to-br from-blue-500 via-green-500 to-teal-500">
```

### Update Title

Edit `index.html` to change the page title:
```html
<title>Your Custom Title</title>
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- GIFs powered by [Giphy API](https://developers.giphy.com/)
- Inspired by the need to celebrate small wins!
- Built with ❤️ using React and Vite

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the Giphy API documentation for API-related questions

---

Made with 💜 to spread positivity, one GIF at a time!
