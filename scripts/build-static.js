const fs = require("fs");
const path = require("path");

// Remove API routes before static build
const apiDir = path.join(__dirname, "../src/app/api");
if (fs.existsSync(apiDir)) {
  console.log("Removing API routes for static build...");
  fs.rmSync(apiDir, { recursive: true, force: true });
  console.log("API routes removed successfully");
}

// Run the build
const { execSync } = require("child_process");
try {
  execSync("next build", { stdio: "inherit" });
  console.log("Build completed successfully");
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}
