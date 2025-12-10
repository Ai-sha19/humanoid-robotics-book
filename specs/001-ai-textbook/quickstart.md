# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Development Setup

### Prerequisites
- Node.js 18+
- Python 3.11+
- pnpm or yarn package manager
- Git

### Initial Setup

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd physical-ai-textbook
cd frontend
pnpm install  # or yarn install
cd ../backend
pip install -r requirements.txt
```

2. **Environment Configuration**:
Create `.env.local` in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Physical AI & Humanoid Robotics Textbook"
```

Create `.env` in the backend directory:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/textbook
QDRANT_URL=http://localhost:6333
OPENAI_API_KEY=your-openai-api-key
JWT_SECRET=your-jwt-secret
```

3. **Database Setup**:
```bash
# For Neon Postgres
npx prisma db push
npx prisma generate

# For Qdrant (ensure Qdrant server is running)
# Collections will be created automatically on first use
```

4. **Run Development Servers**:
```bash
# Terminal 1: Start backend
cd backend
uvicorn main:app --reload --port 8000

# Terminal 2: Start frontend
cd frontend
pnpm dev  # or yarn dev
```

## Key Features

### 1. Content Structure
- Chapters organized by 4 core modules
- MDX format for interactive content
- Mobile-responsive design

### 2. RAG Chatbot
- Ask questions about textbook content
- Get answers with source citations
- Context-aware responses

### 3. Personalization
- User background collection
- Content adjustment based on expertise
- Progress tracking

### 4. Multilingual Support
- Urdu translation capability
- Language switching interface

## API Endpoints

### Content
- `GET /api/chapters` - List all chapters
- `GET /api/chapters/:slug` - Get specific chapter
- `GET /api/modules` - List all modules

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Progress
- `GET /api/progress/chapter/:id` - Get chapter progress
- `PUT /api/progress/chapter/:id` - Update chapter progress

### Chat
- `POST /api/chat/session` - Create new chat session
- `POST /api/chat/session/:id/message` - Send message to session

## Project Structure
```
frontend/                 # Next.js 15 application
├── app/                  # App Router pages
├── components/           # Reusable components
├── lib/                  # Utility functions
└── public/               # Static assets

backend/                  # FastAPI application
├── src/
│   ├── models/           # Data models
│   ├── services/         # Business logic
│   ├── api/              # API routes
│   └── core/             # Core utilities
└── tests/                # Test files
```

## Common Tasks

### Add a new chapter
1. Create MDX file in `frontend/app/chapters/[slug]/page.mdx`
2. Update chapter metadata in database
3. Add to module structure

### Update textbook content
1. Edit MDX files in `frontend/app/chapters/`
2. Rebuild if needed: `pnpm build`

### Add translation
1. Create translation record via API
2. Update `api/translations/` endpoint to serve new language

## Troubleshooting

### Frontend issues
- Ensure all dependencies are installed: `pnpm install`
- Check environment variables in `.env.local`
- Verify backend API is running on configured port

### Backend issues
- Check database connection in `.env`
- Verify Qdrant server is running
- Confirm OpenAI API key is valid

### Chatbot not responding
- Verify OpenAI API key is set
- Check Qdrant vector database connection
- Ensure embedding models are properly configured