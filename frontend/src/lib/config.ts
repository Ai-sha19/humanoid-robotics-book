// Configuration constants for the Physical AI & Humanoid Robotics Textbook

export const CONFIG = {
  APP_NAME: 'Physical AI & Humanoid Robotics Textbook',
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  VERSION: '0.1.0',

  // Content settings
  DEFAULT_LANGUAGE: 'en',
  SUPPORTED_LANGUAGES: ['en', 'ur'], // English and Urdu
  DEFAULT_DIFFICULTY: 'beginner',

  // UI settings
  THEME: {
    DEFAULT: 'light',
    SUPPORTED: ['light', 'dark']
  },

  // Performance settings
  CONTENT_CACHE_DURATION: 300, // 5 minutes
  API_TIMEOUT: 10000, // 10 seconds

  // User settings
  MAX_UPLOAD_SIZE: 5 * 1024 * 1024, // 5MB
  DEFAULT_PAGE_SIZE: 10,

  // Feature flags
  FEATURES: {
    CHATBOT_ENABLED: true,
    PERSONALIZATION_ENABLED: true,
    TRANSLATION_ENABLED: true,
    PROGRESS_TRACKING_ENABLED: true
  }
} as const;

// Type definitions
export type ConfigType = typeof CONFIG;
export type SupportedLanguage = typeof CONFIG.SUPPORTED_LANGUAGES[number];
export type ThemeType = typeof CONFIG.THEME.SUPPORTED[number];
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';