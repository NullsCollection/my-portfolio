# Animation Hooks Migration Guide

## Overview

The animation hooks have been consolidated into a single, more flexible `useScrollAnimation` hook that combines the functionality of the previous `useScrollReveal` and `useExitAnimation` hooks.

## New Unified Hook: `useScrollAnimation`

### Features
- **Unified API**: Single hook for all scroll-based animations
- **Flexible Configuration**: Support for different animation types and directions
- **Exit Animations**: Optional exit animations when elements leave viewport
- **Backward Compatibility**: Old hooks still work via wrapper functions

### Basic Usage

```typescript
import { useScrollAnimation } from '@/hooks/ScrollAnimation/useScrollAnimation';

// Basic fade-in animation
const { sectionVariants, titleVariants, cardVariants, viewportOptions } = useScrollAnimation({
  duration: 0.6,
  threshold: 0.2,
  playOnce: true
});

// With exit animations
const animations = useScrollAnimation({
  enableExit: true,
  exitDuration: 0.4,
  playOnce: false,
  direction: 'up',
  animationType: 'fade'
});
```

### Configuration Options

```typescript
interface ScrollAnimationOptions {
  // Basic options
  duration?: number;          // Animation duration (default: 0.6s)
  delay?: number;            // Initial delay (default: 0s)
  threshold?: number;        // Viewport threshold (default: 0.2)
  playOnce?: boolean;        // Play only once (default: true)
  
  // Advanced options
  enableExit?: boolean;      // Enable exit animations (default: false)
  exitDuration?: number;     // Exit animation duration (default: 0.4s)
  staggerDelay?: number;     // Stagger delay for children (default: 0.1s)
  animationType?: 'fade' | 'slide' | 'scale';  // Animation type (default: 'fade')
  direction?: 'up' | 'down' | 'left' | 'right'; // Animation direction (default: 'up')
}
```

### Animation Types

1. **Fade**: Simple opacity transitions
2. **Slide**: Movement-based transitions with opacity
3. **Scale**: Scale-based transitions with opacity

### Directions

- **up**: Elements slide in from bottom
- **down**: Elements slide in from top  
- **left**: Elements slide in from right
- **right**: Elements slide in from left

## Migration Examples

### Before (useScrollReveal)
```typescript
import { useScrollReveal } from '@/hooks/ScrollAnimation/useScrollReaveal';

const animations = useScrollReveal({
  playOnce: false,
  threshold: 0.2,
  duration: 0.7
});
```

### After (useScrollAnimation)
```typescript
import { useScrollAnimation } from '@/hooks/ScrollAnimation/useScrollAnimation';

const animations = useScrollAnimation({
  playOnce: false,
  threshold: 0.2,
  duration: 0.7,
  enableExit: false,
  animationType: 'fade',
  direction: 'up'
});
```

### Before (useExitAnimation)
```typescript
import { useExitAnimation } from '@/hooks/ScrollAnimation/useExitAnimation';

const animations = useExitAnimation({
  exitDuration: 0.5,
  threshold: 0.1,
  playOnce: false
});
```

### After (useScrollAnimation)
```typescript
import { useScrollAnimation } from '@/hooks/ScrollAnimation/useScrollAnimation';

const animations = useScrollAnimation({
  exitDuration: 0.5,
  threshold: 0.1,
  playOnce: false,
  enableExit: true,
  animationType: 'fade',
  direction: 'up'
});
```

## Backward Compatibility

The old hooks are still available as convenience wrappers:

```typescript
// These still work but are deprecated
import { useScrollReveal, useExitAnimation } from '@/hooks/ScrollAnimation/useScrollAnimation';

// Recommended: Use the new unified hook
import { useScrollAnimation } from '@/hooks/ScrollAnimation/useScrollAnimation';
```

## Benefits of Migration

1. **Reduced Bundle Size**: Single hook instead of multiple similar hooks
2. **Better Type Safety**: Centralized type definitions
3. **More Flexibility**: Configurable animation types and directions
4. **Consistent API**: Unified interface for all scroll animations
5. **Better Performance**: Optimized animation variants

## Components Updated

- ✅ `AboutMe.tsx` - Updated to use `useScrollAnimation`
- ✅ `Services.tsx` - Updated to use `useScrollAnimation`
- 🔄 Other components can be migrated gradually

## Next Steps

1. Gradually migrate other components to use `useScrollAnimation`
2. Remove old hook files once all components are migrated
3. Update documentation and examples
4. Consider adding more animation presets based on usage patterns
