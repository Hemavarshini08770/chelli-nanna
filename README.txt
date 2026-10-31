BLACKSPIRE — MOBILE SEND BUTTON DEMO FIX

This version makes the Contact form button work without depending on a Vercel API route.
It validates required fields, shows visible tap/loading feedback, then displays:
"Button working — demo only. Your message was not sent or saved."

As requested:
- No email is sent.
- No message is stored.
- No backend/API request is needed for this demo button interaction.

DEPLOY:
1. Extract this ZIP.
2. Replace the existing files in the GitHub repository with these files, keeping the same root structure.
3. Commit/push the changes.
4. In Vercel, open Deployments and deploy the newest commit.
5. On the phone, open the website and refresh fully (or open in a private tab) to avoid cached old JavaScript.
6. Test Contact form again.

If the live site still shows the old error after deploying, the new contact.js has not reached the live deployment or the phone is showing a cached page.
