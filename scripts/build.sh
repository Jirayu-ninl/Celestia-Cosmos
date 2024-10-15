#!/bin/bash

# Extract projectName from the first argument
projectName=$1

# Check if projectName is provided
if [ -z "$projectName" ]; then
  echo "Error: Project name is required. Usage: ./build.sh <projectName>"
  exit 1
fi

# Get current date in the format YYYYMMDD
currentDate=$(date +%Y%m%d)

# Define the output file name with the project name and date
outputFile="app-${projectName}_${currentDate}.7z"

# Function to display the menu and get user's choice
display_menu() {
  echo "Select an action:"
  echo "1. Clean"
  echo "2. Install"
  echo "3. Build"
  echo "4. Deploy"
  read -p "Enter your choice (1-4): " choice
}

# Function to handle cleaning options
clean_options() {
  echo "Select a clean option:"
  echo "1. Clean packages built"
  echo "2. Clean app built"
  echo "3. Clean nodes"
  echo "4. Clean all"
  read -p "Enter your choice (1-4): " clean_choice

  case $clean_choice in
    1) rm -rf packages/**/dist ;;
    2) rm -rf .next out dist ;;
    3) rm -rf pnpm-lock.yaml bun.lockb node_modules packages/**/node_modules ;;
    4)
      rm -rf packages/**/dist
      rm -rf .next out dist
      rm -rf pnpm-lock.yaml bun.lockb node_modules packages/**/node_modules
      ;;
    *) echo "Invalid choice" ;;
  esac
}

# Display menu and get user's choice
display_menu

case $choice in
  1) 
    clean_options
    ;;
  2)
    echo "### Installing dependencies..."
    pnpm install
    pnpm pre:db
    ;;
  3)
    echo "### Building app..."
    pnpm build
    ;;
  4)
    echo "### Preparing app for deployment..."
    rm -f "$outputFile"
    mv ".next/static" ".next/standalone/.next/static"
    cp -r "public" ".next/standalone/public"
    cd ".next/standalone" || exit

    echo "### Compressing..."
    7z a -t7z "$outputFile" *
    echo "### Compression complete: $outputFile"
    mv "$outputFile" "../../$outputFile"
    ;;
  *)
    echo "Invalid choice"
    ;;
esac

echo "### DONE ###"
read -n 1 -s -r -p "Press any key to exit ..."
exit