# Motahareh Psychotherapy Website

A professional, calming website for psychotherapy services.

## Files

- `index.html` - Main homepage
- `styles.css` - Styling and design
- `script.js` - Interactive functionality

## Setting Up the Contact Form with GoDaddy

The contact form currently uses a `mailto:` link which opens the user's email client. To properly integrate with GoDaddy's email system, you have a few options:

### Option 1: Use GoDaddy Email Forwarding
1. Log into your GoDaddy account
2. Go to your domain's email settings
3. Set up email forwarding to forward emails from your domain to your preferred email address
4. Update the `mailto:` link in `script.js` (line 30) with your GoDaddy email address

### Option 2: Use GoDaddy Form Handler
1. GoDaddy may provide a form handler service
2. Replace the form submission code in `script.js` with a fetch request to GoDaddy's form handler endpoint
3. Update the form action attribute in `index.html` if needed

### Option 3: Use a Third-Party Form Service
Consider using services like:
- Formspree
- Netlify Forms
- EmailJS

These can forward form submissions to your GoDaddy email inbox.

## Customization

- **Hero Image**: The current hero image uses an Unsplash photo. Replace the URL in `styles.css` (line 50) with your own therapy-related image
- **Colors**: Update the CSS variables in `styles.css` (lines 4-11) to match your brand colors
- **Content**: Edit the text content in `index.html` to reflect your specific services and information

## Testing

Simply open `index.html` in a web browser to view the website. For production, upload all files to your GoDaddy hosting.

