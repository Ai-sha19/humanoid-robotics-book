# API Contract: Physical AI & Humanoid Robotics Textbook

## Authentication API

### POST /api/auth/register
**Description**: Register a new user with background information
**Request**:
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe",
  "background": "software"
}
```

**Response (201)**:
```json
{
  "user": {
    "id": "uuid-string",
    "email": "user@example.com",
    "name": "John Doe",
    "background": "software",
    "createdAt": "2025-12-08T10:00:00Z"
  },
  "token": "jwt-token-string"
}
```

**Validation**:
- Email must be valid format
- Password must be at least 8 characters
- Background must be "software", "hardware", or "mixed"

### POST /api/auth/login
**Description**: Authenticate user and return token
**Request**:
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response (200)**:
```json
{
  "user": {
    "id": "uuid-string",
    "email": "user@example.com",
    "name": "John Doe",
    "background": "software"
  },
  "token": "jwt-token-string"
}
```

## Content API

### GET /api/chapters
**Description**: Get all chapters with module information
**Response (200)**:
```json
{
  "chapters": [
    {
      "id": "uuid-string",
      "title": "Introduction to Physical AI",
      "slug": "introduction-to-physical-ai",
      "moduleId": "module-1-uuid",
      "moduleTitle": "Foundations of Physical AI",
      "order": 1,
      "wordCount": 2500,
      "difficulty": "beginner"
    }
  ]
}
```

### GET /api/chapters/{slug}
**Description**: Get a specific chapter by slug
**Response (200)**:
```json
{
  "chapter": {
    "id": "uuid-string",
    "title": "Introduction to Physical AI",
    "slug": "introduction-to-physical-ai",
    "moduleId": "module-1-uuid",
    "content": "# Chapter content in MDX format...",
    "order": 1,
    "wordCount": 2500,
    "difficulty": "beginner",
    "createdAt": "2025-12-08T10:00:00Z",
    "updatedAt": "2025-12-08T10:00:00Z"
  }
}
```

## Progress API

### GET /api/progress/chapter/{chapterId}
**Description**: Get user's progress for a specific chapter
**Response (200)**:
```json
{
  "progress": {
    "id": "uuid-string",
    "userId": "user-uuid",
    "chapterId": "chapter-uuid",
    "completed": false,
    "progress": 45,
    "lastReadAt": "2025-12-08T10:00:00Z",
    "timeSpent": 1200,
    "notes": "Some notes here..."
  }
}
```

### PUT /api/progress/chapter/{chapterId}
**Description**: Update user's progress for a specific chapter
**Request**:
```json
{
  "progress": 50,
  "notes": "Updated notes",
  "completed": false
}
```

**Response (200)**:
```json
{
  "progress": {
    "id": "uuid-string",
    "userId": "user-uuid",
    "chapterId": "chapter-uuid",
    "completed": false,
    "progress": 50,
    "lastReadAt": "2025-12-08T10:00:00Z",
    "timeSpent": 1800,
    "notes": "Updated notes"
  }
}
```

## Chat API

### POST /api/chat/session
**Description**: Create a new chat session
**Request**:
```json
{
  "initialMessage": "What is Physical AI?"
}
```

**Response (201)**:
```json
{
  "session": {
    "id": "session-uuid",
    "title": "What is Physical AI?",
    "createdAt": "2025-12-08T10:00:00Z",
    "updatedAt": "2025-12-08T10:00:00Z",
    "isActive": true
  }
}
```

### POST /api/chat/session/{sessionId}/message
**Description**: Send a message to a chat session and get AI response
**Request**:
```json
{
  "message": "Explain humanoid robot control systems"
}
```

**Response (200)**:
```json
{
  "response": "Humanoid robot control systems typically involve multiple layers...",
  "sources": [
    {
      "chapterId": "chapter-uuid",
      "chapterTitle": "Control Systems in Humanoid Robotics",
      "section": "Introduction"
    }
  ],
  "contextUsed": ["context-section-uuid"]
}
```

## Translation API

### GET /api/translations/chapter/{chapterId}/language/{languageCode}
**Description**: Get translated version of a chapter
**Response (200)**:
```json
{
  "translation": {
    "id": "translation-uuid",
    "chapterId": "chapter-uuid",
    "language": "ur",
    "title": "مصنوعی ذہانت کا تعارف",
    "content": "# Urdu content in MDX format...",
    "createdAt": "2025-12-08T10:00:00Z",
    "updatedAt": "2025-12-08T10:00:00Z",
    "isApproved": true
  }
}
```