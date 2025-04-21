#!/bin/bash

# Script to fix Git LFS files for Vercel deployment
echo "Starting LFS fix for Vercel deployment..."

# Ensure all LFS files are downloaded
echo "Fetching all LFS files..."
git lfs fetch --all

# Check out all LFS files
echo "Checking out LFS files..."
git lfs checkout

# Create a temporary .gitattributes backup
if [ -f .gitattributes ]; then
  echo "Backing up .gitattributes..."
  cp .gitattributes .gitattributes.backup
fi

# Remove LFS tracking for image files
echo "Removing LFS tracking for image files..."
git lfs untrack "assets/images/**"
git lfs untrack "*.png"
git lfs untrack "*.jpg"
git lfs untrack "*.jpeg"

# Add the files back to git (now as regular files, not LFS)
echo "Adding files back to git as regular files..."
git add assets/images/
git add favicon-32x32.png

# Commit the changes
echo "Committing changes..."
git commit -m "Convert LFS files to regular files for Vercel deployment"

echo "Done! Your files should now deploy correctly to Vercel."
echo "After deploying to Vercel, you may want to restore LFS tracking by running:"
echo "  mv .gitattributes.backup .gitattributes (if you had a backup)"
echo "  git add .gitattributes"
echo "  git commit -m 'Restore LFS tracking'"
