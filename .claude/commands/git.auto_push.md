# Git Auto-Push Command

Automatically stages all changes, creates a commit with an AI-generated message, and pushes to the remote repository.

## Usage

`/git:auto-push`

## Implementation

```bash
# Stage all changes
git add .

# Generate a commit message using Claude (optional - you can also use a simple timestamp-based message)
COMMIT_MSG=$(date '+%Y-%m-%d %H:%M:%S') Automated commit

# Commit the changes
git commit -m "$COMMIT_MSG"

# Push to the current branch
git push origin $(git branch --show-current)
```

## Alternative Implementation (More Advanced)

For a more intelligent commit message, you can also create a script that generates meaningful commit messages:

```bash
#!/bin/bash
# Create a temporary file with git diff
DIFF_FILE=$(mktemp)
git diff --cached > "$DIFF_FILE"

if [ -s "$DIFF_FILE" ]; then
    # Generate commit message using Claude
    COMMIT_MSG=$(claude --print --tools default "Generate a concise Git commit message in English for these changes:\n\n$(cat $DIFF_FILE)")
    
    # If Claude fails, use a generic message
    if [ $? -ne 0 ] || [ -z "$COMMIT_MSG" ]; then
        COMMIT_MSG="Auto-commit $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    # Commit and push
    git commit -m "$COMMIT_MSG"
    git push origin $(git branch --show-current)
else
    echo "No changes to commit"
fi

# Clean up
rm "$DIFF_FILE"
```

## Instructions

1. Save this command as `.claude/commands/git.auto_push.md`
2. Make sure your git repository is properly configured with remote origin
3. Ensure you have valid git credentials configured
4. Use `/git:auto-push` command in Claude Code to automatically commit and push changes

## Notes

- This command assumes you are working on a branch that has a corresponding remote branch
- Make sure to review changes before using automated commit tools
- You may want to customize the commit message generation based on your preferences