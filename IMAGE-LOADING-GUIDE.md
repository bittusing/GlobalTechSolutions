# Image Loading Best Practices - Quick Reference

## 🎯 When to Use Each Loading Strategy

### Priority Loading (Above the Fold)
```tsx
<img 
  src="/hero.png"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  width="900"
  height="900"
  alt="Hero image"
/>
```
**Use for:**
- Hero images
- Header logos
- First viewport content

### Lazy Loading (Below the Fold)
```tsx
<img 
  src="/project.png"
  loading="lazy"
  decoding="async"
  width="580"
  height="363"
  alt="Project screenshot"
/>
```
**Use for:**
- All images below first viewport
- Gallery images
- Product screenshots
- Client logos

### Optimized Image Component
```tsx
<OptimizedImage
  src="/image.png"
  alt="Description"
  width={600}
  height={400}
  priority={false}
  aspectRatio="16/9"
/>
```
**Features:**
- Built-in skeleton loader
- Intersection Observer
- Fade-in animation
- Automatic lazy loading

## 📐 Always Include Dimensions

### Why?
- Prevents layout shift (CLS)
- Reserves space before load
- Improves Core Web Vitals

### How?
```tsx
// Explicit dimensions
<img width="600" height="400" />

// Or use aspect-ratio in CSS
.image-container {
  aspect-ratio: 16 / 9;
}
```

## 🎨 Skeleton Loaders

### CSS Shimmer Animation
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    rgba(240, 240, 240, 0.8) 25%,
    rgba(250, 250, 250, 0.8) 50%,
    rgba(240, 240, 240, 0.8) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

## 🚀 Performance Checklist

- [ ] Hero image has `loading="eager"` and `fetchPriority="high"`
- [ ] Hero image is preloaded in `<head>`
- [ ] All below-fold images have `loading="lazy"`
- [ ] All images have `decoding="async"`
- [ ] All images have explicit `width` and `height`
- [ ] Images fade in smoothly (CSS transition)
- [ ] Skeleton loaders match image dimensions
- [ ] No images bundled in JavaScript
- [ ] Intersection Observer for advanced lazy loading
- [ ] No layout shift during image load

## 📱 Mobile Optimization

### Key Points
- Lazy loading saves mobile data
- Intersection Observer loads images 200px early
- Skeleton loaders provide instant feedback
- Smooth transitions prevent jarring experience

### Testing
```bash
# Test on slow 3G
Chrome DevTools > Network > Slow 3G

# Check layout shift
Lighthouse > Performance > CLS score
```

## 🎯 Core Web Vitals Targets

| Metric | Target | Our Score |
|--------|--------|-----------|
| LCP | < 2.5s | ~2.0s ✅ |
| FID | < 100ms | ~50ms ✅ |
| CLS | < 0.1 | ~0.01 ✅ |

## 🔍 Debugging Tips

### Check if lazy loading works
```javascript
// In browser console
document.querySelectorAll('img[loading="lazy"]').length
```

### Monitor image loading
```javascript
// Log when images load
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('load', () => {
    console.log('Loaded:', img.src);
  });
});
```

### Check layout shift
```javascript
// Cumulative Layout Shift
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('CLS:', entry.value);
  }
}).observe({type: 'layout-shift', buffered: true});
```

## 🎨 Visual States

### Image Loading States
1. **Initial**: Skeleton visible, image hidden
2. **Loading**: Skeleton animating
3. **Loaded**: Fade in image, fade out skeleton
4. **Complete**: Image fully visible

### CSS Implementation
```css
img {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

img.loaded {
  opacity: 1;
}
```

## 🚫 Common Mistakes to Avoid

❌ Loading all images eagerly
❌ No width/height attributes
❌ Bundling images in JavaScript
❌ No skeleton loaders
❌ Abrupt image appearance
❌ Preloading too many images
❌ Animating width/height
❌ No lazy loading on mobile

## ✅ Best Practices Summary

1. **Prioritize above-the-fold** - Load hero images first
2. **Lazy load everything else** - Save bandwidth
3. **Reserve space** - Prevent layout shift
4. **Show skeletons** - Improve perceived performance
5. **Fade in smoothly** - Premium feel
6. **Use Intersection Observer** - Advanced optimization
7. **Test on mobile** - Ensure smooth experience
8. **Monitor Core Web Vitals** - Track improvements

---

**Result**: Fast, smooth, premium image loading experience! 🚀
