# Git Push Command

Stages all changes, creates a commit with a standardized message, and pushes to the remote repository.

## Usage

`/git:push`

## Implementation

```powershell
# PowerShell version for Windows
# Stage all changes
git add .

# Create a timestamp-based commit message
$date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$branch = git branch --show-current
$commitMessage = "[$branch] Automated commit - $date"

# Commit the changes
git commit -m "$commitMessage"

# Push to the current branch
git push origin $branch
```

Alternative Git-only implementation:
```bash
# Stage all changes
git add .

# Create a timestamp-based commit message
COMMIT_MSG="$(git branch --show-current) Automated commit $(date '+%Y-%m-%d %H:%M:%S')"

# Commit the changes
git commit -m "$COMMIT_MSG"

# Push to the current branch
git push origin $(git branch --show-current)
```

## Instructions

1. This command will stage all changes in your working directory
2. Create an automated commit with timestamp and branch info
3. Push changes to the remote repository

## Prerequisites

- Git must be installed and accessible from command line
- Remote origin must be configured for your repository
- Valid credentials must be set up for Git (either SSH keys or credential helper)