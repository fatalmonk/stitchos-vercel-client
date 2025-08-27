 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/build.js b/build.js
index 77f606a7c3b8c6df933cdf9b279515932b49dc0a..1e5e8784ee9532e4ed90eb7e55b352f674bae290 100644
--- a/build.js
+++ b/build.js
@@ -15,55 +15,58 @@ function parseEnv(content) {
   const config = {};
   const lines = content.split('\n');
   
   for (const line of lines) {
     const trimmed = line.trim();
     if (!trimmed || trimmed.startsWith('#')) continue;
     
     const equalIndex = trimmed.indexOf('=');
     if (equalIndex === -1) continue;
     
     const key = trimmed.substring(0, equalIndex).trim();
     let value = trimmed.substring(equalIndex + 1).trim();
     
     // Remove quotes if present
     if ((value.startsWith('"') && value.endsWith('"')) || 
         (value.startsWith("'") && value.endsWith("'"))) {
       value = value.slice(1, -1);
     }
     
     config[key] = value;
   }
   
   return config;
 }
 
-// Read .env file if it exists, otherwise use defaults
-let config = { ...defaults };
-
+// Gather configuration from environment variables and optional .env file
 const envPath = path.join(__dirname, '.env');
+let fileConfig = {};
 if (fs.existsSync(envPath)) {
   try {
     const envContent = fs.readFileSync(envPath, 'utf8');
-    const envConfig = parseEnv(envContent);
-    config = { ...defaults, ...envConfig };
+    fileConfig = parseEnv(envContent);
     console.log('✓ Read .env file');
   } catch (err) {
-    console.warn('⚠ Failed to read .env, using defaults:', err.message);
+    console.warn('⚠ Failed to read .env, ignoring file:', err.message);
   }
 } else {
-  console.log('ℹ No .env file found, using defaults');
+  console.log('ℹ No .env file found');
+}
+
+const config = {};
+for (const key of Object.keys(defaults)) {
+  config[key] = process.env[key] ?? fileConfig[key] ?? defaults[key];
 }
 
 // Ensure scripts directory exists
 const scriptsDir = path.join(__dirname, 'scripts');
 if (!fs.existsSync(scriptsDir)) {
   fs.mkdirSync(scriptsDir, { recursive: true });
 }
 
 // Generate config.js
 const configContent = `window.CONFIG = ${JSON.stringify(config, null, 2)};`;
 const configPath = path.join(scriptsDir, 'config.js');
 
 fs.writeFileSync(configPath, configContent);
 console.log('✓ Generated scripts/config.js');
 console.log('Config:', config);
 
EOF
)
