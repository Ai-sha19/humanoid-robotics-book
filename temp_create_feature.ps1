& .specify/scripts/powershell/create-new-feature.ps1 -ShortName "ai-book-website" -Number 1 -Json -- @"
AI-Native Book Website
Intent: Create a premium Single source of truth book website AI-Native-Driven Development And explain 5 chapters of this topic.

Pages:

Home → Hero + Book preview + CTA
Book → Full scrollable book with chapter navigation + progress bar
About → Author bio + vision
Contact → Waitlist form (save to localStorage)
Success Criteria:

Book has exactly 5 chapters, each with 2 topics
Smooth scroll + chapter progress bar
Mobile perfect + dark mode
All content in MDX (easy to update)
Deployed live link within 30 minutes
Looks like $10k website
Non-goals:

Backend, auth, payments, comments
"@