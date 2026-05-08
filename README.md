# MrBussey Apache + Node.js Site

This repository is a Node.js conversion of the current `mrbussey.com` website, designed to run as a local Node service behind Apache.

## Run Locally

```powershell
npm start
```

The site starts at:

```text
http://127.0.0.1:3000
```

## Apache Setup

1. Copy `apache/mrbussey.conf` into your Apache sites configuration directory.
2. Enable Apache proxy modules:

```bash
a2enmod proxy proxy_http headers rewrite
```

3. Start the Node app on port `3000`.
4. Reload Apache.

Apache will accept traffic for `mrbussey.com` and proxy it to the Node.js app.

## Environment

The server supports these optional environment variables:

```text
HOST=127.0.0.1
PORT=3000
```

## Notes

- The contact form prepares a mailto message locally. The original hosted form provider is not reproduced because it depends on the previous website platform.
- The meeting button links to the current external HubSpot scheduling page.
- Original images, video, and PDF download links are referenced from the existing GoDaddy/WSIMG asset URLs so the converted layout keeps the live site's visual assets.
