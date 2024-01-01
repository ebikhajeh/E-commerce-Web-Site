#!/bin/bash

# Navigate to your project directory
cd C:\Users\ebikh\Desktop\Project\e--shop-showcase-main

# Check the status of the repository
git status

# Add all changes to the staging area
git add .

# Commit changes with a timestamp as the commit message
git commit -m "Auto commit at $(date +'%Y-%m-%d %H:%M:%S')"

# Push changes to the remote repository (replace 'main' with your branch name)
git push origin main
