# Client Asset Vault

## Purpose
Central repository for all client credentials and assets. One source of truth — no more "where did I save the logo?" or "what's their hosting password?"

## Template — Copy for each client

```
Project: [Client Name]
Date: [Start Date]

=== DOMAIN & HOSTING ===
Domain Registrar: [Name] | [URL]
Hosting Provider: [Name] | [URL]
Hosting Panel: [URL] | [Username] | [Password]
FTP/SFTP: [Host] | [Port] | [Username] | [Password]

=== EMAIL ===
Email Provider: [Name]
Admin Email: [address] | [password]
Info Email: [address] | [password]

=== GOOGLE ===
Google Account: [email] | [password]
Google Business Profile: [URL]
Google Analytics (GA4): [Measurement ID]
Google Search Console: [URL] | [Verification method]
Google Tag Manager: [Container ID]

=== SOCIAL MEDIA ===
Facebook Page: [URL]
Facebook Admin: [email] | [password]
Instagram: [username] | [password]
LinkedIn: [URL]
YouTube: [URL]

=== DESIGN ASSETS ===
Logo Files: [path to source files]
Logo (White): [path]
Brand Colors: Primary [#hex] | Secondary [#hex] | Accent [#hex]
Fonts: [names]

=== DEVELOPMENT ===
Git Repo: [URL]
Staging URL: [URL]
Production URL: [URL]
CMS Admin: [URL] | [username] | [password]

=== THIRD PARTY ===
Microsoft Clarity: [Project ID]
Mailchimp / Email: [API Key]
Booking System: [URL] | [credentials]
Payment Processor: [Account name]

=== NOTES ===
[Any special instructions, quirks, or known issues]
```

## Security Rules
- Store in encrypted password manager (Bitwarden, 1Password)
- Never commit credentials to git
- Use environment variables in code
- Share with client via secure link (not email plaintext)
- Rotate passwords on project completion
- Set reminder: verify access quarterly
