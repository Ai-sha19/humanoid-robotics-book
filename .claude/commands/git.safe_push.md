# Safe Git Commit and Push Command

Safely stages changes, creates a detailed commit, and pushes to the remote repository with safety checks.

## Usage

`/git:safe-push`

## Implementation

```bash
# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "Error: Not in a git repository"
    return 1
fi

# Check if there are any changes to commit
if [[ -z $(git status --porcelain) ]]; then
    echo "No changes to commit"
    return 0
fi

# Show changes that will be committed
echo "Changes to be committed:"
git status --porcelain

# Stage all changes
echo "Staging all changes..."
git add .

# Get current branch name
BRANCH_NAME=$(git branch --show-current)

# Create detailed commit message
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
COMMIT_MSG="[${BRANCH_NAME}] Automated commit - ${TIMESTAMP}

Automated commit from Claude Code session
Branch: ${BRANCH_NAME}
Timestamp: ${TIMESTAMP}"

# Create the commit
echo "Creating commit: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

# Check if the branch has an upstream
UPSTREAM=$(git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>/dev/null)

if [ $? -eq 0 ]; then
    # Upstream exists, push to it
    echo "Pushing to upstream..."
    git push
else
    # No upstream, push to origin with current branch
    echo "Setting upstream and pushing to origin..."
    git push --set-upstream origin $BRANCH_NAME
fi

echo "Git operations completed successfully!"
```

## Instructions

1. This command performs safety checks before committing
2. Shows what changes will be committed
3. Creates a detailed commit message
4. Handles both cases where upstream branch exists or needs to be created
5. Performs the push operation

## Prerequisites

Same as the basic git.push command