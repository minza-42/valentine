# Valentine 💖

An interactive, playful web page to ask: "Will you be my Valentine?" — with a twist! This project is a fun, animated, and slightly mischievous way to pop the question, perfect for sharing with someone special.

## Features

- **Charming UI:** Beautiful, modern design with soft pink gradients and playful fonts (Pacifico & Quicksand)
- **Interactive YES/NO Buttons:**
  - **YES Button:** Clicking triggers a sweet success message
  - **NO Button:** Runs away when you get close! The button moves to a new random position every time your mouse approaches within 100px
  - After 5 escape attempts, a funny "cat with a gun" meme appears with a warning message
  - A "Try Again" button lets you restart the game
- **Smooth Animations:** Pulsing buttons, shake effects, and fade-in transitions
- **Responsive Design:** Works on both desktop and mobile devices
  - ⚠️ **Note:** Responsiveness is a work in progress. On smaller screens the NO button can sometimes move to awkward positions near screen edges or behave unexpectedly when moving far distances. This is being actively improved!

## How It Works

1. Open `index.html` in your web browser
2. Try to click the "NO" button — watch it run away from your cursor!
3. The NO button will dodge you up to 5 times
4. After 5 attempts, an angry cat appears telling you to quit messing around
5. Click "Try Again" to restart, or click "YES" to see the happy message 💕

## Installation & Usage

1. **Download the files:**
   - Clone this repository or download the ZIP
2. **Required files (keep them in the same folder):**
   - `index.html` - Main page structure
   - `style.css` - All styling and animations
   - `script.js` - Interactive behavior
   - `cat-gun.gif` - Warning image (you can replace this with your own!)

3. **Open the page:**
   - Simply double-click `index.html` or open it in any modern web browser
   - No server or installation needed!

## Customization Ideas

### Change the Warning Image

Replace `cat-gun.gif` with any image or meme you like:

```html
<img src="your-image.gif" alt="Your custom image" />
```

### Adjust Difficulty

In `script.js`, change the number of attempts before the warning appears:

```javascript
if (noAttempts >= 5) {  // Change 5 to any number
```

### Personalize the Message

Edit the text in `index.html`:

```html
<h1>Will you be my Valentine? 💘</h1>
<!-- Customize this -->
<p>Quit messing around!</p>
<!-- And this -->
```

### Modify Colors

In `style.css`, change the gradient colors:

```css
background: linear-gradient(120deg, #ff9a9e 0%, #fad0c4 100%);
```

## Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks or libraries required
- **Responsive** - Uses viewport units and flexbox for adaptability
- **Mouse tracking** - Detects when cursor gets within 100px of the NO button
- **Smooth animations** - CSS keyframes and transitions for polished effects
- **Cross-browser compatible** - Works in Chrome, Firefox, Safari, and Edge

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Known Issues & Limitations

- **NO Button Positioning (WIP):** The NO button can occasionally move to awkward positions near screen edges or corners, especially when trying to escape long distances. The positioning algorithm is being refined to ensure the button always stays in comfortable, reachable positions.
- **Small Screen Behavior:** On very small screens, the button movement area is limited and may feel constrained.

These issues are actively being worked on! 🚧

## Credits

- **Design & Code:** Custom Valentine's Day interactive experience
- **Fonts:** [Google Fonts](https://fonts.google.com/) - Pacifico & Quicksand
- **Cat Meme:** Internet classic 🐱🔫

---

Made with 💖 for Valentine's Day

_Feel free to fork, customize, and share with your loved ones!_
