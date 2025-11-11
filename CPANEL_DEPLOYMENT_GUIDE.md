# cPanel Deployment Guide for QIBIBILOSH

This guide will help you deploy the QIBIBILOSH platform to Yeagar Host cPanel.

## 📋 Prerequisites

- cPanel hosting account with Node.js support
- SSH access (recommended but optional)
- FTP/File Manager access
- Domain or subdomain configured

## 🎯 Deployment Strategy

Since this is a full-stack application (React frontend + Node.js backend), we'll deploy it as follows:
1. **Frontend**: Build and deploy as static files
2. **Backend**: Deploy as a Node.js application using cPanel's Node.js App feature

---

## 📦 Part 1: Prepare Your Application

### Step 1: Build the Frontend

On your local machine, build the React frontend:

```bash
cd /home/abel/Documents/Qibiblosh/client
npm install
npm run build
```

This creates a `dist/` folder with optimized static files.

### Step 2: Prepare Backend Files

The backend files in `/server` directory are ready to deploy.

---

## 🚀 Part 2: Deploy to cPanel

### Option A: Using File Manager (Easier)

#### 1. Upload Backend Files

1. Log into your cPanel
2. Open **File Manager**
3. Navigate to your domain's root directory (usually `public_html` or create a subdirectory)
4. Create a folder structure:
   ```
   public_html/
   ├── api/          (for backend)
   └── (root)        (for frontend)
   ```

5. Upload the following to `public_html/api/`:
   - `server/index.js`
   - `server/package.json`
   - `server/routes/` (entire folder)
   - `server/.env` (we'll configure this)

6. Upload frontend build files to `public_html/`:
   - All files from `client/dist/` folder
   - Copy everything directly to `public_html/` (not in a subfolder)

#### 2. Setup Node.js Application

1. In cPanel, find **Setup Node.js App** (or **Node.js Selector**)
2. Click **Create Application**
3. Configure:
   - **Node.js version**: Select latest available (14+ recommended)
   - **Application mode**: Production
   - **Application root**: `api` (or the folder where you uploaded backend)
   - **Application URL**: Choose your domain or subdomain
   - **Application startup file**: `index.js`
   - **Passenger log file**: Leave default

4. Click **Create**

#### 3. Install Backend Dependencies

After creating the Node.js app:

1. cPanel will show you a command to run
2. Copy the command (looks like: `source /home/username/nodevenv/...`)
3. Open **Terminal** in cPanel
4. Run the provided command to enter Node.js environment
5. Navigate to your app directory:
   ```bash
   cd ~/public_html/api
   ```
6. Install dependencies:
   ```bash
   npm install
   ```

#### 4. Configure Environment Variables

1. In the Node.js App interface, find **Environment Variables** section
2. Add these variables:
   ```
   PORT=5000
   CLIENT_URL=https://yourdomain.com
   JWT_SECRET=your_secure_random_string_here
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   NODE_ENV=production
   ```

   **Important Notes:**
   - Replace `yourdomain.com` with your actual domain
   - Generate a strong JWT_SECRET (random string, 32+ characters)
   - You'll need a MongoDB database (see MongoDB setup below)
   - For email, use Gmail App Password or your email provider's SMTP

#### 5. Configure Frontend API URL

Before building the frontend, update the API URL:

1. Edit `client/src/App.jsx` or create `client/.env`:
   ```
   VITE_API_URL=https://yourdomain.com/api
   ```

2. Rebuild the frontend:
   ```bash
   cd client
   npm run build
   ```

3. Re-upload the `dist/` contents to `public_html/`

#### 6. Setup .htaccess for React Router

Create/edit `.htaccess` in `public_html/`:

```apache
# React Router Support
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Don't rewrite API calls
  RewriteCond %{REQUEST_URI} !^/api
  
  # Rewrite everything else to index.html
  RewriteRule ^ index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### 7. Start the Application

1. Go back to **Setup Node.js App** in cPanel
2. Find your application
3. Click **Restart** or **Start**
4. Check the status - it should show "Running"

---

### Option B: Using SSH (Advanced)

If you have SSH access:

```bash
# Connect to your server
ssh username@yourdomain.com

# Navigate to public_html
cd ~/public_html

# Create api directory
mkdir -p api

# Upload files using SCP or Git
# Then follow steps 2-7 from Option A
```

---

## 🗄️ Part 3: Database Setup

### MongoDB Options:

#### Option 1: MongoDB Atlas (Recommended - Free Tier Available)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Whitelist your cPanel server's IP address
6. Use the connection string in your `.env` file

#### Option 2: cPanel MongoDB (if available)

1. Check if your hosting has MongoDB
2. Create a database in cPanel
3. Note the connection details
4. Use in your `.env` file

---

## 🔧 Part 4: Configuration Files

### Create .htaccess for API (in public_html/api/)

```apache
PassengerEnabled on
PassengerAppRoot /home/username/public_html/api
PassengerAppType node
PassengerStartupFile index.js
```

### Update server/index.js for cPanel

Ensure your server listens on the correct port:

```javascript
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## ✅ Part 5: Testing

1. Visit your domain: `https://yourdomain.com`
   - Should show the React frontend

2. Test API: `https://yourdomain.com/api/events`
   - Should return JSON response

3. Test admin login and all features

---

## 🐛 Troubleshooting

### Issue: "Application Error" or 500 Error

**Solutions:**
1. Check Node.js app logs in cPanel
2. Verify all dependencies are installed
3. Check environment variables are set correctly
4. Ensure MongoDB connection is working

### Issue: Frontend shows but API doesn't work

**Solutions:**
1. Check if Node.js app is running in cPanel
2. Verify API URL in frontend is correct
3. Check CORS settings in `server/index.js`
4. Review `.htaccess` configuration

### Issue: React Router not working (404 on refresh)

**Solutions:**
1. Verify `.htaccess` file exists in `public_html/`
2. Check if mod_rewrite is enabled
3. Ensure RewriteBase is set correctly

### Issue: MongoDB connection fails

**Solutions:**
1. Verify connection string is correct
2. Check if IP is whitelisted (MongoDB Atlas)
3. Test connection from cPanel terminal:
   ```bash
   node -e "require('mongoose').connect('your_connection_string').then(() => console.log('Connected')).catch(err => console.log(err))"
   ```

---

## 📝 Quick Checklist

- [ ] Frontend built (`npm run build` in client/)
- [ ] Frontend files uploaded to `public_html/`
- [ ] Backend files uploaded to `public_html/api/`
- [ ] Node.js app created in cPanel
- [ ] Dependencies installed (`npm install`)
- [ ] Environment variables configured
- [ ] MongoDB database setup and connected
- [ ] `.htaccess` files created
- [ ] Application started/restarted
- [ ] Domain/subdomain configured
- [ ] SSL certificate installed (recommended)
- [ ] All features tested

---

## 🔐 Security Recommendations

1. **SSL Certificate**: Install free Let's Encrypt SSL in cPanel
2. **Strong JWT Secret**: Use a random 32+ character string
3. **Environment Variables**: Never commit `.env` to Git
4. **MongoDB**: Use strong passwords and IP whitelisting
5. **Admin Password**: Change default admin credentials
6. **Rate Limiting**: Already configured in the app
7. **CORS**: Configure only for your domain

---

## 🚀 Alternative: Simplified Deployment

If Node.js hosting is complex on your cPanel, consider:

1. **Frontend on cPanel**: Deploy static files as shown above
2. **Backend elsewhere**: 
   - Deploy backend to Railway.app (free tier)
   - Deploy backend to Render.com (free tier)
   - Deploy backend to Heroku
   - Update frontend API URL to point to external backend

---

## 📞 Support

If you encounter issues:
1. Check cPanel error logs
2. Review Node.js application logs
3. Contact Yeagar Host support for Node.js specific issues
4. Ensure your hosting plan supports Node.js applications

---

## 🎉 Success!

Once deployed, your QIBIBILOSH platform will be live at:
- **Frontend**: https://yourdomain.com
- **API**: https://yourdomain.com/api
- **Admin**: https://yourdomain.com/admin

Remember to:
- Monitor application logs regularly
- Keep dependencies updated
- Backup your database
- Monitor resource usage

---

**Need help?** Check the main README.md for application details and features.
