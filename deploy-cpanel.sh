#!/bin/bash

# QIBIBILOSH cPanel Deployment Script
# This script prepares your application for cPanel deployment

echo "🚀 QIBIBILOSH cPanel Deployment Preparation"
echo "==========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Build Frontend
echo -e "${YELLOW}Step 1: Building Frontend...${NC}"
cd client

if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

echo "Building React application..."
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Frontend built successfully${NC}"
else
    echo -e "${RED}✗ Frontend build failed${NC}"
    exit 1
fi

cd ..

# Step 2: Prepare Backend
echo ""
echo -e "${YELLOW}Step 2: Preparing Backend...${NC}"

if [ ! -f "server/.env" ]; then
    echo -e "${YELLOW}⚠ Warning: server/.env not found${NC}"
    echo "Creating .env from example..."
    cp server/.env.example server/.env
    echo -e "${YELLOW}Please edit server/.env with your actual credentials${NC}"
fi

# Step 3: Create deployment package
echo ""
echo -e "${YELLOW}Step 3: Creating deployment package...${NC}"

# Create deployment directory
mkdir -p deployment
mkdir -p deployment/frontend
mkdir -p deployment/backend

# Copy frontend build
echo "Copying frontend files..."
cp -r client/dist/* deployment/frontend/
cp .htaccess deployment/frontend/

# Copy backend files
echo "Copying backend files..."
cp -r server/* deployment/backend/
cp server/.htaccess deployment/backend/

# Remove node_modules from backend (will be installed on server)
rm -rf deployment/backend/node_modules

# Create deployment instructions
cat > deployment/UPLOAD_INSTRUCTIONS.txt << 'EOF'
QIBIBILOSH - cPanel Upload Instructions
========================================

FRONTEND FILES (deployment/frontend/):
--------------------------------------
1. Upload ALL files from 'deployment/frontend/' to your cPanel public_html/
2. Make sure .htaccess is uploaded
3. Ensure index.html is in the root of public_html/

BACKEND FILES (deployment/backend/):
------------------------------------
1. Create a folder 'api' in public_html/
2. Upload ALL files from 'deployment/backend/' to public_html/api/
3. Make sure .htaccess is uploaded to public_html/api/

NEXT STEPS:
-----------
1. In cPanel, go to "Setup Node.js App"
2. Create new application:
   - Application root: api
   - Application startup file: index.js
   - Node.js version: Latest available
3. After creating, run: npm install
4. Configure environment variables in cPanel Node.js App interface
5. Start the application
6. Visit your domain to test

For detailed instructions, see CPANEL_DEPLOYMENT_GUIDE.md
EOF

echo -e "${GREEN}✓ Deployment package created in 'deployment/' folder${NC}"

# Step 4: Summary
echo ""
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}Deployment Preparation Complete!${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
echo "Next steps:"
echo "1. Review deployment/UPLOAD_INSTRUCTIONS.txt"
echo "2. Edit server/.env with your production credentials"
echo "3. Upload files to cPanel as instructed"
echo "4. Follow CPANEL_DEPLOYMENT_GUIDE.md for complete setup"
echo ""
echo "Files ready in 'deployment/' folder:"
echo "  - deployment/frontend/ (upload to public_html/)"
echo "  - deployment/backend/ (upload to public_html/api/)"
echo ""
