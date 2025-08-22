// Minimal server.js for cPanel - basic endpoints only
const http = require('http');
const nodemailer = require('nodemailer');

// SMTP Configuration
const SMTP_HOST = 'bizmail22.itools.mn';
const SMTP_USER = 'no-reply@saibaitour.mn';
const SMTP_PASS = '&3_[]CD(5U3skgf?'; // ⚠️ REPLACE WITH ACTUAL PASSWORD
const BUSINESS_EMAIL = 'info@saibaitour.mn';

// Create nodemailer transporter
const transporter = nodemailer.createTransporter({
  host: SMTP_HOST,
  port: 465, // Standard SMTP port, adjust if needed
  secure: true, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false // For self-signed certificates
  }
});

// Verify transporter connection
transporter.verify(function(error, success) {
  if (error) {
    console.log('❌ SMTP connection error:', error);
  } else {
    console.log('✅ SMTP server is ready to send emails');
  }
});

// Create server
const server = http.createServer(function(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Get the path (handle both relative and full paths)
  const fullPath = req.url;
  const pathOnly = fullPath.split('?')[0]; // Remove query parameters
  
  // Endpoint 1: Health check
  if (pathOnly.includes('/health')) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      status: 'OK',
      message: 'Mail service is running (minimal mode)',
      timestamp: new Date().toISOString(),
      mode: 'minimal'
    }));
    return;
  }
  
  // Endpoint 2: Email endpoint (placeholder)
  if (pathOnly.includes('/api/send-email') && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const emailData = JSON.parse(body);
        const { to, subject, text, html, from } = emailData;
        
        // Basic validation
        if (!subject || (!text && !html)) {
          res.writeHead(400, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({
            success: false,
            error: 'Missing required fields: subject and either text or html'
          }));
          return;
        }
        
        // Send email using nodemailer
        const mailOptions = {
          from: from || SMTP_USER,
          to: BUSINESS_EMAIL,
          subject: subject,
          text: text || '',
          html: html || ''
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log('❌ Email sending failed:', error);
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({
              success: false,
              error: 'Failed to send email',
              details: error.message
            }));
            return;
          }

          console.log('✅ Email sent successfully:');
          console.log('  Message ID:', info.messageId);
          console.log('  Sent to:', BUSINESS_EMAIL);
          console.log('  Subject:', subject);

          // Success response
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({
            success: true,
            message: 'Email sent successfully',
            messageId: info.messageId,
            email_data: {
              to: BUSINESS_EMAIL,
              subject: subject,
              from: from || SMTP_USER
            }
          }));
        });
        
      } catch (error) {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
          success: false,
          error: 'Invalid JSON data'
        }));
      }
    });
    return;
  }
  
  // Endpoint 3: Root info
  if (pathOnly === '/mail-service' || pathOnly === '/') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      message: 'SAI Mail Service is running',
      version: '1.0.0',
      smtp_config: {
        host: SMTP_HOST,
        user: SMTP_USER,
        business_email: BUSINESS_EMAIL
      },
      endpoints: ['/', '/health', '/api/send-email'],
      status: 'READY FOR FRONTEND - Email endpoint active',
      note: 'All emails are sent to business email regardless of "to" field'
    }));
    return;
  }
  
  // Default response for any other path
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('SAI Mail Service!\nNodeJS ' + process.versions.node + '\n');
});

// Listen (cPanel will assign port)
server.listen();

console.log('🚀 SAI Mail Service is running!');
console.log('📧 SMTP Host:', SMTP_HOST);
console.log('👤 SMTP User:', SMTP_USER);
console.log('🔑 SMTP Pass:', SMTP_PASS ? '***SET***' : 'NOT SET');
console.log('🔗 Health check: /health');
console.log('📋 Root: /');
console.log('📬 Email endpoint: /api/send-email');
console.log('📧 Using Nodemailer for SMTP');
console.log('✅ READY FOR FRONTEND USE!');
