# Feature Modules

This folder will contain feature-based modules that encapsulate related components, hooks, and logic.

## Structure

Each feature module should follow this structure:

```
features/
└── FeatureName/
    ├── components/       # Feature-specific components
    ├── hooks/           # Feature-specific hooks
    ├── types.ts         # Feature-specific types
    ├── utils.ts         # Feature-specific utilities
    └── index.ts         # Public API exports
```

## Example

```
features/
└── ProjectGallery/
    ├── components/
    │   ├── ProjectCard.tsx
    │   ├── ProjectModal.tsx
    │   └── ProjectFilters.tsx
    ├── hooks/
    │   └── useProjectGallery.ts
    ├── types.ts
    └── index.ts
```

## Migration Status

Phase 5 may create feature modules for complex components like Projects.
