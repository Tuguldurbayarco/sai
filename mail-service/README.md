# SAI Mail Service

A standalone Node.js mail service for the SAI tour website using Nodemailer with SMTP.

## Features

- Simple email sending API
- SMTP integration with bizmail22.itools.mn
- Frontend constructs email content
- Health check endpoint
- SMTP connection testing
- cPanel Node.js app compatible

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy `env.example` to `.env` and fill in your credentials:

```bash
cp env.example .env
```

Edit `.env` with your actual values:

```env
SMTP_HOST=bizmail22.itools.mn
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_actual_email@domain.com
SMTP_PASS=your_actual_password
ALLOWED_ORIGINS=https://yourdomain.com,http://localhost:3000
NODE_ENV=production
```

### 3. Test Locally

```bash
npm run dev
```

The service will start on port 3001.

## API Endpoints

### Health Check
- **GET** `/health` - Check if service is running

### Root Endpoint
- **GET** `/` - Service information and available endpoints

### Test SMTP Connection
- **GET** `/api/test-smtp` - Test SMTP server connection

### Send Email
- **POST** `/api/send-email`
- **Body:**
  ```json
  {
    "to": "recipient@example.com",
    "subject": "Email Subject",
    "text": "Plain text version",
    "html": "<h1>HTML version</h1>",
    "from": "sender@example.com" // optional, uses SMTP_USER if not provided
  }
  ```

## Frontend Integration

The frontend constructs the email content and sends it to the mail service:

```typescript
// Example: Send a simple email
const result = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'info@saibaitour.mn',
    subject: 'New Tour Booking',
    html: '<h2>Tour booking request</h2><p>Details...</p>'
  })
});
```

## Deployment on cPanel

### 1. Create Node.js App in cPanel
- Go to cPanel → "Node.js Apps"
- Click "Create Application"
- Set app name: `sai-mail-service`
- Set app root: `/home/username/mail-service`
- Set app URL: `yourdomain.com/mail-service`
- Set app startup file: `server.js`
- Set Node.js version: 18.x or higher

### 2. Upload Files
- Upload the `mail-service` folder to your cPanel hosting
- Place it in the directory you specified in the Node.js app

### 3. Install Dependencies
```bash
cd mail-service
npm install --production
```

### 4. Create Environment File
Create `.env` file with your actual credentials

### 5. Start the App
- In cPanel Node.js Apps, click "Start" on your app
- The app will run on the port assigned by cPanel

### 6. Alternative: Use PM2 (Optional)
```bash
npm run setup-pm2
npm run cpanel-start
```

## cPanel Node.js App Management

- **Start/Stop**: Use cPanel's Node.js Apps interface
- **Restart**: Click restart button in cPanel
- **Logs**: View logs in cPanel or use PM2 commands
- **Port**: cPanel automatically assigns and manages the port

## Security Notes

- The service includes CORS protection
- Only specified origins can access the API
- Environment variables keep credentials secure
- Input validation on all endpoints

## Troubleshooting

### SMTP Connection Issues
1. Check your credentials in `.env`
2. Verify SMTP settings with your hosting provider
3. Test connection with `/api/test-smtp` endpoint

### Service Not Starting
1. Check cPanel Node.js Apps status
2. Verify Node.js version (requires >=16)
3. Check error logs in cPanel

### Emails Not Sending
1. Verify SMTP credentials
2. Check if emails are being blocked by spam filters
3. Verify the email addresses are correct

### cPanel Specific Issues
1. Make sure Node.js app is created and started
2. Check app root directory path
3. Verify startup file is `server.js`
4. Check Node.js version compatibility
