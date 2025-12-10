# Research Summary: Physical AI & Humanoid Robotics Textbook

## Decision: Next.js 15 with Docusaurus-inspired structure
**Rationale**: Next.js 15 provides the modern features needed for the textbook (App Router, server components, SSG/SSR) while allowing us to implement a Docusaurus-like content structure. This approach combines the best of both worlds: Next.js 15's advanced capabilities with Docusaurus's content-focused architecture.

**Alternatives considered**:
- Pure Docusaurus: Limited by React Server Components and Next.js 15 features
- Pure Next.js: Would require building content management from scratch
- Gatsby: Less suitable for dynamic content and real-time features

## Decision: FastAPI backend for RAG chatbot
**Rationale**: FastAPI provides excellent performance, async capabilities, and built-in OpenAPI documentation. It's ideal for handling vector database operations and AI integrations. The framework's speed and type safety make it perfect for RAG operations.

**Alternatives considered**:
- Node.js/Express: Slower for compute-intensive operations
- Django: More complex for API-only use case
- Flask: Less performant for concurrent operations

## Decision: Neon Postgres + Qdrant for vector storage
**Rationale**: Neon provides serverless PostgreSQL with branch/clone capabilities for development, while Qdrant offers specialized vector search functionality. This combination provides both relational data storage (users, content metadata) and vector storage (embeddings for RAG).

**Alternatives considered**:
- Pinecone: Managed but more expensive
- Weaviate: Good alternative but Qdrant has better performance for this use case
- PostgreSQL with pgvector: Possible but Qdrant is optimized for vector operations

## Decision: Better-Auth for authentication
**Rationale**: Better-Auth provides a modern, type-safe authentication solution with good integration capabilities. It supports social logins and custom providers, which is important for the educational platform.

**Alternatives considered**:
- NextAuth.js: Popular but Better-Auth has better TypeScript support
- Clerk: Good but requires external service
- Auth.js: Similar to NextAuth, Better-Auth chosen for consistency

## Decision: Shadcn/ui + Tailwind for UI components
**Rationale**: Aligns with constitutional requirement of using only shadcn/ui and Tailwind CSS. Provides customizable, accessible components with good performance.

**Alternatives considered**:
- Material UI: Would violate constitutional constraint
- Chakra UI: Would violate constitutional constraint
- Custom components: Would require more development time

## Decision: MDX for content format
**Rationale**: MDX allows JSX components within Markdown, providing flexibility for interactive textbook content while maintaining readability. Perfect for technical content with code examples and diagrams.

**Alternatives considered**:
- Standard Markdown: Less interactive capabilities
- MDXT: Alternative but MDX is more established
- JSON content: Less readable and maintainable

## Decision: GitHub Pages/Vercel deployment
**Rationale**: Meets constitutional requirement for deployment targets. Vercel provides excellent Next.js support while GitHub Pages offers reliable static hosting.

**Alternatives considered**:
- Netlify: Would work but Vercel has better Next.js integration
- AWS Amplify: More complex setup
- Self-hosting: Would violate constitutional constraint

## Technology Stack Summary
- **Frontend**: Next.js 15 (App Router), React 18, TypeScript 5.x
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: FastAPI, Python 3.11+
- **Databases**: Neon Postgres (relational), Qdrant (vector)
- **Authentication**: Better-Auth
- **Content**: MDX files
- **Deployment**: Vercel (primary), GitHub Pages (alternative)
- **AI/ML**: OpenAI SDK, embedding models for RAG
- **Testing**: Jest, React Testing Library, Playwright