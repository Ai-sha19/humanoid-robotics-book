---
id: 1
title: Create Textbook Constitution
stage: constitution
date: 2025-12-08
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: 001-ai-book-website
user: fattani
command: /sp.constitution
labels: [constitution, textbook, docusaurus]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

Hackathon Project: Physical AI & Humanoid Robotics Textbook (Docusaurus)

CORE PROJECT GOAL:
Create a comprehensive, AI-native technical textbook for the "Physical AI & Humanoid Robotics" course. The final output must be a ready-to-deploy Docusaurus website/book.

TARGET AUDIENCE:
Students and professionals applying their AI knowledge to control Humanoid Robots in simulated and real-world environments.

CONTENT SOURCE:
The provided "Course Details" (Quarter Overview, 4 Modules, Weekly Breakdown, Assessments, Hardware Requirements, VLA, ROS 2, Gazebo, NVIDIA Isaac).

TONE & STYLE:
Expert, technical, application-focused, and highly structured (for AI-native generation).

CORE PRINCIPLES (Functionality & Features):
1. BASE DELIVERABLES (100 Points):
    - AI/Spec-Driven Book Creation using Spec-Kit Plus and Claude Code (Docusaurus + GitHub Pages deployment).
    - Integrated **RAG Chatbot** (within the book) using ChatKit/FastAPI/Neon Postgres/Qdrant. Must answer questions based on the whole book and user-selected text.
2. BONUS FEATURES (Potential 200 Extra Points):
    - **Reusable Intelligence:** Implement Claude Code Subagents and Agent Skills for content generation/refinement. (Bonus: 50)
    - **Better-Auth Integration:** Implement Signup/Signin using better-auth.com. User background (software/hardware) to be collected at signup for personalization. (Bonus: 50)
    - **Personalization:** Logged users must be able to personalize chapter content via a button (at the start of each chapter). (Bonus: 50)
    - **Urdu Translation:** Logged users must be able to translate chapter content to Urdu via a button (at the start of each chapter). (Bonus: 50)

TECHNICAL & UI CONSTRAINTS:
* FRAMEWORK: Docusaurus.
* UI: Zero external UI libraries except shadcn/ui & Tailwind.
* DESIGN: Mobile-First, glassmorphism + gradient design.
* ARCHITECTURE: Must adhere to the 4 modules and 13 weekly breakdown topics.
* STANDARDS: TypeScript strict mode.
* OUTPUT: All components must be reusable.
* **DEPLOYMENT:** Must deploy on GitHub Pages or Vercel.

## Response snapshot

The Physical AI & Humanoid Robotics Textbook Constitution has been successfully created with the following key elements:

**Core Principles:**
1. AI/Spec-Driven Development - All content creation follows AI-native spec-driven methodology
2. Docusaurus Framework Compliance - All functionality built using Docusaurus framework
3. RAG Chatbot Integration (NON-NEGOTIABLE) - Integrated chatbot using ChatKit/FastAPI/Neon Postgres/Qdrant
4. Modular Architecture - Content adheres to 4 modules and 13 weekly breakdown topics
5. Authentication and Personalization - Better-Auth integration for user signup/signin
6. Deployment and Standards - Deployments target GitHub Pages or Vercel with TypeScript strict mode

**Technical Constraints:**
- Framework: Docusaurus only
- UI Libraries: shadcn/ui and Tailwind CSS only
- Design: Mobile-First, glassmorphism + gradient design
- Standards: TypeScript strict mode
- Output: All components must be reusable
- Deployment: GitHub Pages or Vercel only

## Outcome

- ✅ Impact: Created foundational constitution for Physical AI & Humanoid Robotics textbook project
- 🧪 Tests: No tests required for constitution creation
- 📁 Files: Updated .specify/memory/constitution.md with project-specific principles
- 🔁 Next prompts: Plan and specification creation for the textbook features
- 🧠 Reflection: Constitution provides clear governance framework for the hackathon project

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS - Constitution properly structured and comprehensive
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature specification based on constitution