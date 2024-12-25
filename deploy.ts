import { execSync } from "child_process";

try {
  console.log("Building the project...");
  execSync("npm run build", { stdio: "inherit" });

  console.log("Deploying to Cloudflare Pages...");
  execSync("npx wrangler pages deploy ./dist --project-name=my-react-app", {
    stdio: "inherit",
  });

  console.log("Deployment successful!");
} catch (err) {
  console.error("Deployment failed:", err.message);
}
