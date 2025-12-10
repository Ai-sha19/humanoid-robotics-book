---
description: "Task list for Physical AI & Humanoid Robotics Textbook Core UI/Tech Setup"
---

# Tasks: Physical AI & Humanoid Robotics Textbook - Phase 1: Core UI/Tech Setup

**Input**: Design documents from `/specs/001-ai-textbook/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/`
- **Frontend files**: `frontend/` directory
- **Shared packages**: `packages/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create frontend project structure with Next.js 15 and App Router in `frontend/`
- [X] T002 [P] Initialize package.json with required dependencies (Next.js 15, React 18, TypeScript 5.x)
- [X] T003 [P] Configure linting and formatting tools (ESLint, Prettier) in `frontend/`

---
## Phase 2: Tailwind & Styling Setup

**Purpose**: Configure Tailwind CSS and shadcn/ui components for the project

- [X] T004 Install Tailwind CSS and configure for Next.js 15 in `frontend/`
- [X] T005 [P] Configure Tailwind with glassmorphism and gradient design presets in `frontend/tailwind.config.ts`
- [X] T006 [P] Install and configure shadcn/ui components following constitutional requirements
- [X] T007 Create base styling files and theme configuration in `frontend/src/styles/`
- [X] T008 [P] Set up global CSS with mobile-first responsive design in `frontend/src/styles/globals.css`

---
## Phase 3: Docusaurus Structure Implementation

**Purpose**: Implement Docusaurus-inspired content structure for the textbook

- [X] T009 Create 6 Chapter skeleton structure in `frontend/app/chapters/`
- [X] T010 [P] Set up module structure following 4 course modules in `frontend/app/modules/`
- [X] T011 [P] Create MDX configuration for textbook content in `frontend/next.config.mjs`
- [X] T012 Implement content routing strategy in `frontend/app/page.tsx` and related routes

---
## Phase 4: Layout & Navigation Components

**Purpose**: Create main layout and navigation components using shadcn/ui

- [X] T013 Create main Layout component with responsive design in `frontend/src/components/layout/main-layout.tsx`
- [X] T014 [P] Create Header component with navigation in `frontend/src/components/layout/header.tsx`
- [X] T015 [P] Create Sidebar navigation component for textbook chapters in `frontend/src/components/layout/sidebar.tsx`
- [X] T016 Create Footer component in `frontend/src/components/layout/footer.tsx`
- [X] T017 [P] Implement mobile navigation menu in `frontend/src/components/layout/mobile-nav.tsx`
- [X] T018 Create chapter navigation component in `frontend/src/components/chapters/chapter-nav.tsx`

---
## Phase 5: Core Components

**Purpose**: Create reusable components required for the textbook interface

- [X] T019 Create theme toggle component using shadcn/ui in `frontend/src/components/ui/theme-toggle.tsx`
- [X] T020 [P] Create responsive container component in `frontend/src/components/ui/container.tsx`
- [X] T021 [P] Create typography components following design system in `frontend/src/components/ui/typography.tsx`
- [X] T022 Create loading skeleton components in `frontend/src/components/ui/skeletons.tsx`
- [X] T023 [P] Create breadcrumb navigation for textbook structure in `frontend/src/components/ui/breadcrumbs.tsx`

---
## Phase 6: Configuration & Integration

**Purpose**: Finalize setup and ensure all components work together

- [X] T024 Configure Next.js App Router with textbook structure in `frontend/app/layout.tsx`
- [X] T025 [P] Set up TypeScript configuration with strict mode in `frontend/tsconfig.json`
- [X] T026 [P] Configure environment variables and constants in `frontend/src/lib/config.ts`
- [X] T027 Create initial dummy content for 6 chapters in MDX format
- [X] T028 [P] Set up content metadata structure in `frontend/src/lib/content.ts`

---
## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Tailwind & Styling (Phase 2)**: Depends on Setup completion
- **Docusaurus Structure (Phase 3)**: Depends on Setup completion
- **Layout & Navigation (Phase 4)**: Depends on Styling completion
- **Core Components (Phase 5)**: Depends on Styling completion
- **Configuration & Integration (Phase 6)**: Depends on all previous phases

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Styling tasks marked [P] can run in parallel (within Phase 2)
- Layout & Navigation components can be developed in parallel after styling
- Core components can be developed in parallel after styling
- Content creation can happen in parallel with component development