#!/bin/bash

echo "🚀 Deploying SAI Mail Service to cPanel Node.js App..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Please copy env.example to .env and fill in your credentials first."
    exit 1
fi

# Install production dependencies
echo "📦 Installing production dependencies..."
npm run install-deps

# Check if PM2 is installed globally
if ! command -v pm2 &> /dev/null; then
    echo "📥 Installing PM2 globally..."
    npm run setup-pm2
fi

# Stop existing service if running
echo "🛑 Stopping existing service..."
pm2 stop sai-mail-service 2>/dev/null || true
pm2 delete sai-mail-service 2>/dev/null || true

# Start the service
echo "▶️ Starting mail service..."
pm2 start server.js --name "sai-mail-service"

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 to start on system reboot
echo "🔄 Setting up PM2 startup..."
pm2 startup

echo "✅ Deployment complete!"
echo ""
echo "📊 Service Status:"
pm2 status sai-mail-service
echo ""
echo "🔗 cPanel Node.js App Management:"
echo "   - Use cPanel's 'Node.js Apps' section to manage the app"
echo "   - The app will run on the port assigned by cPanel"
echo "   - You can start/stop/restart from cPanel interface"
echo ""
echo "📝 PM2 Commands:"
echo "   Logs: pm2 logs sai-mail-service"
echo "   Stop: pm2 stop sai-mail-service"
echo "   Start: pm2 start sai-mail-service"
echo "   Restart: pm2 restart sai-mail-service"
echo ""
echo "🌐 Test your service:"
echo "   Health check: curl http://localhost:\$PORT/health"
echo "   Root endpoint: curl http://localhost:\$PORT/"
