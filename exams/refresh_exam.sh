#!/bin/bash

## Refresh the exam branch with the latest changes from main

# 1. Save the directory to a temporary location
cp -r docs/exams /tmp/exams_temp

# 2. Reset the branch to main
git reset --hard main

# 3. Restore the directory
mv /tmp/exams_temp docs/exams

# 4. Stage and commit the changes
git add docs/exams
git commit -m "Auto-refresh: Updated exams branch from main"

echo "Branch refreshed successfully."