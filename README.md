# UMass Cybersecurity Club Website

A Next.js website for the UMass Amherst Cybersecurity Club, featuring event listings and club information.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Vercel (pending)

## Setup

1. Clone the repository
2. Install dependencies:
```bash
   npm install
```
3. Run the development server:
```bash
   npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure
```
app/  
    page.tsx          # Home page  
    events/  
        page.tsx      # Events listing
        [slug]/       # Dynamic Route
            page.tsx  
    about/
        page.tsx      # About page  
    layout.tsx        # Root layout with navigation  
    globals.css       # Global styles  
lib/
    events.ts         # Helper functions
content/              # Markdown pages
    events/
        ctf-team-meeting.md
        ..
```

## Features

- Clean, responsive design
- Event listings
- Club information
- Markdown-based events
- Dynamic routing
- API endpoints (coming Tuesday)

## Next Steps

- Deploy to Vercel
- Add search/filter functionality

## Interview Demo

Built for the Digital Design Lead position interview at UMass Cybersecurity Club.