# Configuration Files

This folder contains all configuration constants and settings for the portfolio application.

## Files

- **`site.ts`** - Site metadata, SEO information, and author details
- **`navigation.ts`** - Navigation items and section IDs
- **`social.ts`** - Social media links and contact information
- **`design-tokens.ts`** - Design system values (colors, spacing, breakpoints, animations)
- **`index.ts`** - Barrel export for easy imports

## Usage

```typescript
// Import specific config
import { siteConfig } from '@/config/site';
import { NAV_ITEMS } from '@/config/navigation';

// Or import from barrel
import { siteConfig, NAV_ITEMS, socialLinks } from '@/config';
```

## Migration Status

Phase 3 will populate these files with values extracted from components.
