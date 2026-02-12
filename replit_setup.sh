#!/bin/bash
# Replit deployment script

echo "Setting up Replit project..."

# Create .replit config
cat > .replit << 'REPLITCONFIG'
run = "python3 -m http.server 8080"
language = "html"

[nix]
channel = "stable-22_11"

[deployment]
run = ["sh", "-c", "python3 -m http.server 8080"]
deploymentTarget = "cloudrun"
REPLITCONFIG

# Create replit.nix
cat > replit.nix << 'NIX'
{ pkgs }: {
  deps = [
    pkgs.python3
  ];
}
NIX

echo "Replit config created!"
echo "Files ready for deployment"
