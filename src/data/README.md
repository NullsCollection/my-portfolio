# Data Files

This folder contains all static data and mock data for the portfolio application.

## Files

- **`projects.ts`** - Project information, categories, and filters
- **`services.ts`** - Service offerings and descriptions
- **`skills.ts`** - Skills data and categories
- **`achievements.ts`** - Achievement statistics and milestones
- **`faqs.ts`** - Frequently asked questions
- **`index.ts`** - Barrel export for easy imports

## Usage

```typescript
// Import specific data
import { PROJECTS, PROJECT_FILTERS } from '@/data/projects';

// Or import from barrel
import { PROJECTS, SERVICES, SKILLS } from '@/data';
```

## Migration Status

Phase 2 will populate these files with data extracted from hooks and components.
