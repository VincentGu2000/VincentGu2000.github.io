# Publication Images Guide

This directory should contain the thumbnail images for your publications.

## Required Images

For each publication, you need:

1. **Static image** (`.png` or `.jpg`) - Always visible
2. **Hover image** (`.gif` or second `.png`) - Shown on mouse hover

### Recommended Specifications

- **Size**: 230 x 165 pixels (width x height)
- **Format**: PNG or JPG for static, GIF for animations
- **File size**: Keep under 500KB for fast loading

## Files to Prepare

### 1. IEEE TRO Paper
- `tro_fishtail.png` - Static thumbnail
- `tro_fishtail.gif` - Hover animation (optional)

### 2. USIM/U0 Paper (arXiv)
- `usim_u0.png` - Static thumbnail
- `usim_u0.gif` - Hover animation (optional)

### 3. CBS 2024 Paper
- `cbs2024.png` - Static thumbnail
- `cbs2024.gif` - Hover animation (optional)

### 4. IEEE TIE Paper (Co-authored)
- `tie_multirobot.png` - Static thumbnail
- `tie_multirobot.gif` - Hover animation (optional)

### 5. ICCSS 2021 Paper (Co-authored)
- `iccss2021.png` - Static thumbnail
- `iccss2021.gif` - Hover animation (optional)

## Tips for Creating Thumbnails

1. **Use paper teaser images**: Most papers have a main figure/teaser that represents the work
2. **Create GIFs from videos**: If you have demo videos, extract key frames or create short loops
3. **Keep it simple**: Clear, high-contrast images work best at small sizes
4. **Consistent style**: Use similar visual style across all thumbnails

## Placeholder Behavior

If images are not found, the browser will show a broken image icon. You can:

1. Add the actual images as described above
2. Or temporarily comment out the image sections in `index.html`
3. Or use a placeholder service like `https://via.placeholder.com/230x165`
