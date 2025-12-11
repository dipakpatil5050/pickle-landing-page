# Locomotive Scroll Integration Guide

Your Pickle landing page now features smooth scrolling powered by **Locomotive Scroll**, providing an enhanced user experience with elegant animations and parallax effects.

## ✨ Features Implemented

### 1. **Smooth Scrolling**

- Hardware-accelerated smooth scrolling across all browsers
- Mobile and tablet optimized scrolling experience
- Touch multiplier for better mobile interactions

### 2. **Reveal Animations**

- Elements fade and slide in as they come into view
- Customizable reveal delays and distances
- Built-in intersection observer support

### 3. **Parallax Effects**

- Easy-to-implement parallax scrolling on images and sections
- Adjustable speed multipliers for depth effects

### 4. **Mobile Optimized**

- Full smooth scrolling support on mobile devices
- Optimized touch interactions
- Responsive animations

## 🎯 How to Use

### Basic Scroll Reveal

Add `data-scroll` attribute to any element to enable reveal animation:

```tsx
<div data-scroll>
  <h2>This will fade in when scrolled into view</h2>
</div>
```

### Parallax Effect

Add `data-scroll-speed` for parallax scrolling:

```tsx
<div data-scroll data-scroll-speed="2">
  <img src="image.jpg" alt="Parallax Image" />
</div>
```

Higher speed values = more parallax effect (0.5 = subtle, 2 = dramatic)

### Custom Scroll Offset

Control when elements appear relative to viewport:

```tsx
<div data-scroll data-scroll-offset="100">
  Content appears 100px before entering viewport
</div>
```

### Multiple Classes

Combine with other CSS classes:

```tsx
<div data-scroll className="mb-8 text-center">
  <p>Smooth reveal with custom styling</p>
</div>
```

## 🎨 CSS Animation Classes

Pre-built animation classes available:

- `.scroll-fade-in` - Fade in animation
- `.scroll-scale-in` - Scale + fade animation
- `[data-scroll].is-reveal` - Active state for revealed elements

## 🪝 React Hooks

Two custom hooks for advanced scroll animations:

### `useScrollReveal()`

```tsx
import { useScrollReveal } from "@/hooks/use-scroll-animations";

export function MyComponent() {
  const ref = useScrollReveal();
  return (
    <div ref={ref} data-scroll>
      Content
    </div>
  );
}
```

### `useParallax(speed)`

```tsx
import { useParallax } from "@/hooks/use-scroll-animations";

export function ParallaxImage() {
  const ref = useParallax(0.5); // speed multiplier
  return (
    <div ref={ref}>
      <img src="image.jpg" />
    </div>
  );
}
```

## 📁 File Structure

```
components/
  └── scroll-provider.tsx          # Main scroll provider component
hooks/
  └── use-scroll-animations.ts     # Custom hooks for scroll effects
styles/
  └── globals.css                  # Locomotive scroll styles & animations
app/
  └── layout.tsx                   # ScrollProvider wrapped layout
  └── page.tsx                     # Page with scroll attributes added
```

## ⚙️ Configuration

The scroll provider is configured with:

- **Smooth scrolling**: Enabled on all devices
- **Multiplier**: 1 (adjust for slower/faster scrolling)
- **Touch support**: Enabled with 2x multiplier for better mobile feel
- **Reset native scroll**: Enabled for consistency
- **Scroll from anywhere**: Enabled for full-page scroll

To customize, edit `components/scroll-provider.tsx`:

```tsx
const scroll = new LocomotiveScroll({
  el: scrollRef.current,
  smooth: true,
  multiplier: 1, // Change to 0.5 for slower, 1.5 for faster
  touchMultiplier: 2, // Mobile scroll feel
  // ... other options
});
```

## 🚀 Performance Tips

1. **Use sparingly** - Don't add `data-scroll` to every element
2. **Debounce events** - Heavy animations can impact performance
3. **Test on devices** - Always test parallax effects on mobile
4. **Optimize images** - Large images affect scroll performance
5. **Monitor FPS** - Use browser DevTools to check frame rates

## 🔗 Current Usage

- ✅ All major sections have smooth reveal animations
- ✅ Hero section scrolls smoothly
- ✅ Features grid fades in on scroll
- ✅ Testimonials and pricing sections animate
- ✅ Full page smooth scrolling enabled

## 📦 Dependencies

- `locomotive-scroll` - Smooth scrolling library
- `@types/locomotive-scroll` - TypeScript types

## 🎬 Next Steps

To further enhance scroll animations:

1. Add parallax to hero section images
2. Implement scroll-triggered counters for stats
3. Add stagger animations to grid items
4. Create scroll-based progress indicators
5. Add section-based color transitions

## 💡 Troubleshooting

**Scrolling feels laggy:**

- Reduce parallax speed values
- Check for heavy animations in CSS
- Profile with DevTools Performance tab

**Animations not triggering:**

- Ensure `data-scroll` is on the element
- Check that elements have sufficient height/viewport space
- Verify ScrollProvider wraps all content in layout

**Mobile issues:**

- Test in Chrome DevTools device mode
- Adjust `touchMultiplier` in scroll-provider.tsx
- Reduce animation complexity

---


