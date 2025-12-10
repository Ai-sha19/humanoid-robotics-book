# Data Model: Physical AI & Humanoid Robotics Textbook

## Entities

### User
**Description**: Represents students and professionals using the textbook platform
**Fields**:
- id: string (UUID) - Unique identifier
- email: string - User's email address
- name: string - User's full name
- createdAt: DateTime - Account creation timestamp
- updatedAt: DateTime - Last update timestamp
- background: "software" | "hardware" | "mixed" - User's technical background for personalization
- preferences: JSON - Personalization preferences
- isSubscribed: boolean - Whether user has subscribed for updates

**Validation**:
- Email must be valid format
- Background must be one of the allowed values
- Name must be 2-100 characters

**Relationships**:
- One-to-many with UserChapterProgress
- One-to-many with UserChatHistory

### Chapter
**Description**: Represents a chapter in the textbook following the 4 module structure
**Fields**:
- id: string (UUID) - Unique identifier
- moduleId: string - Reference to the parent module
- title: string - Chapter title
- slug: string - URL-friendly identifier
- content: string - Chapter content in MDX format
- order: number - Order within the module
- createdAt: DateTime - Creation timestamp
- updatedAt: DateTime - Last update timestamp
- wordCount: number - Estimated word count for reading time
- difficulty: "beginner" | "intermediate" | "advanced" - Difficulty level

**Validation**:
- Title must be 5-200 characters
- Slug must be URL-friendly
- Order must be positive integer
- Difficulty must be one of allowed values

**Relationships**:
- Many-to-one with Module
- One-to-many with UserChapterProgress
- One-to-many with ChapterTranslation

### Module
**Description**: Represents one of the 4 core modules of the Physical AI course
**Fields**:
- id: string (UUID) - Unique identifier
- title: string - Module title
- description: string - Module description
- order: number - Order of the module (1-4)
- createdAt: DateTime - Creation timestamp
- updatedAt: DateTime - Last update timestamp
- totalChapters: number - Number of chapters in this module

**Validation**:
- Title must be 5-100 characters
- Order must be 1-4
- Description must be 10-500 characters

**Relationships**:
- One-to-many with Chapter
- One-to-many with ModuleProgress

### UserChapterProgress
**Description**: Tracks user progress through chapters
**Fields**:
- id: string (UUID) - Unique identifier
- userId: string - Reference to user
- chapterId: string - Reference to chapter
- completed: boolean - Whether chapter is completed
- progress: number (0-100) - Percentage completed
- lastReadAt: DateTime - Last time chapter was accessed
- timeSpent: number - Time spent in seconds
- notes: string - User notes on the chapter

**Validation**:
- Progress must be 0-100
- Time spent must be non-negative

**Relationships**:
- Many-to-one with User
- Many-to-one with Chapter

### ChatSession
**Description**: Represents an interaction session between user and the RAG chatbot
**Fields**:
- id: string (UUID) - Unique identifier
- userId: string (optional) - Reference to user (null for anonymous sessions)
- title: string - Session title (generated from first question)
- createdAt: DateTime - Creation timestamp
- updatedAt: DateTime - Last update timestamp
- isActive: boolean - Whether session is currently active

**Validation**:
- Title must be 5-100 characters

**Relationships**:
- Many-to-one with User (optional)
- One-to-many with ChatMessage

### ChatMessage
**Description**: Represents a message in a chat session
**Fields**:
- id: string (UUID) - Unique identifier
- sessionId: string - Reference to chat session
- role: "user" | "assistant" - Message sender
- content: string - Message content
- createdAt: DateTime - Creation timestamp
- contextUsed: string[] - IDs of textbook sections referenced
- sources: string[] - Source chapters/sections for the response

**Validation**:
- Content must be 1-5000 characters
- Role must be one of allowed values

**Relationships**:
- Many-to-one with ChatSession

### ChapterTranslation
**Description**: Represents translated versions of chapters
**Fields**:
- id: string (UUID) - Unique identifier
- chapterId: string - Reference to the original chapter
- language: string - Language code (e.g., "ur" for Urdu)
- title: string - Translated title
- content: string - Translated content in MDX format
- createdAt: DateTime - Creation timestamp
- updatedAt: DateTime - Last update timestamp
- isApproved: boolean - Whether translation has been reviewed

**Validation**:
- Language must be valid language code
- Content must not be empty

**Relationships**:
- Many-to-one with Chapter

## State Transitions

### User Registration Flow
1. User creates account → User status: registered
2. User completes background survey → User preferences updated
3. User begins first chapter → UserChapterProgress created

### Chapter Progression
1. User accesses chapter → progress starts at 0%
2. User reads content → progress updates based on scroll/time
3. User completes chapter → completed flag set to true

### Chat Session Flow
1. User starts new chat → ChatSession created
2. User asks questions → ChatMessage created with role=user
3. AI responds → ChatMessage created with role=assistant
4. Session continues → ChatMessages accumulate