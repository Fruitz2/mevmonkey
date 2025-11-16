# Fix mevmonkey.com Domain Configuration

## Problem
Your domain is not properly connected to Vercel. The Namecheap DNS is conflicting with Vercel's settings.

## Solution: Use Vercel's Nameservers (Recommended)

### Step 1: Go to Namecheap Domain Settings
1. Log into Namecheap
2. Go to Domain List → Manage for mevmonkey.com
3. Click on "Advanced DNS" tab

### Step 2: Remove Current DNS Records
1. Delete the A Record pointing to 76.76.21.21
2. Delete the URL Redirect Record
3. Delete any other custom records

### Step 3: Change to Vercel Nameservers
1. In Namecheap, go to "Domain" tab (not Advanced DNS)
2. Find "NAMESERVERS" section
3. Select "Custom DNS" from dropdown
4. Add these nameservers:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
5. Click the green checkmark to save

### Step 4: Wait for Propagation
- DNS changes can take 24-48 hours to fully propagate
- Usually works within 1-4 hours

### Step 5: Verify in Vercel
1. Go to your Vercel project settings
2. Check Domains section
3. mevmonkey.com should show as "Valid Configuration" once propagated

## Alternative Solution: Keep Namecheap DNS

If you want to keep using Namecheap's DNS:

### In Namecheap Advanced DNS:
1. Remove the current A Record
2. Remove the URL Redirect
3. Add these records:

For root domain (mevmonkey.com):
- Type: ALIAS or CNAME (if ALIAS not available)
- Host: @
- Value: cname.vercel-dns.com
- TTL: Automatic

For www subdomain:
- Type: CNAME
- Host: www
- Value: cname.vercel-dns.com
- TTL: Automatic

## Current Issue
The A record pointing to 76.76.21.21 is a Vercel IP, but without proper Vercel nameservers or CNAME configuration, it won't route correctly to your deployment.

## Quick Check
Visit: https://mevmonkey.vercel.app (this works)
Once DNS is fixed: https://mevmonkey.com will work
