# Sterling Intelligence System Architecture v1

## Mission

Generate qualified meetings for Sterling Oak with minimal manual work while maintaining high personalization, quality, and deliverability.

---

# SYSTEM OVERVIEW

Lead Source
        ↓
Research AI
        ↓
Qualification AI
        ↓
Email AI
        ↓
Human Review
        ↓
Cold Email
        ↓
Reply Detection
        ↓
HubSpot CRM
        ↓
Calendly Booking
        ↓
Discovery Call
        ↓
Proposal AI
        ↓
Client

---

# MODULE 1 — Lead Collection

## Purpose

Collect high-quality companies that match Sterling Oak's Ideal Customer Profile (ICP).

## Sources

- LinkedIn
- Apollo
- Google Search
- Clutch
- Company Directories
- Referrals

## Output

- Company Name
- Website
- Industry
- LinkedIn
- Decision Maker
- Email Address

---

# MODULE 2 — Research AI

## Uses

research.md

## Input

- Company Name
- Website
- LinkedIn
- Decision Maker

## Output

- Executive Summary
- Products & Services
- Target Market
- Growth Signals
- Pain Points
- Website Analysis
- Personalization Ideas
- Outreach Angle
- ICP Score

---

# MODULE 3 — Qualification AI

## Uses

qualification.md

## Purpose

Determine whether the lead is worth pursuing.

## Output

- Overall Score
- Priority
- Budget Potential
- Need
- Timing
- Decision Maker Access
- Recommended Action

---

# MODULE 4 — Email AI

## Uses

email.md

## Purpose

Generate highly personalized cold emails.

## Output

- Subject Line
- Cold Email
- CTA
- Confidence Score

---

# MODULE 5 — Human Review

## Checklist

- Verify facts
- Improve personalization
- Check grammar
- Approve email

---

# MODULE 6 — Outreach

## Current

- Zoho Mail
- Manual Sending

## Future

- Smartlead
- Instantly
- Multiple Sending Domains

---

# MODULE 7 — CRM

## Platform

HubSpot

## Pipeline

- Lead Added
- Research Complete
- Qualified
- Contacted
- Replied
- Meeting Booked
- Proposal Sent
- Won
- Lost

---

# MODULE 8 — Meeting

## Booking

Calendly

↓

Google Meet

↓

Meeting Notes

---

# MODULE 9 — Proposal AI

## Uses

proposal.md

## Output

- Proposal
- Scope
- Deliverables
- Timeline
- Pricing
- Next Steps

---

# FUTURE AUTOMATION

## Workflow

Apollo / Google
        ↓
n8n
        ↓
OpenAI API
        ↓
Research AI
        ↓
Qualification AI
        ↓
Email AI
        ↓
HubSpot
        ↓
Human Approval
        ↓
Zoho / Smartlead
        ↓
Replies
        ↓
HubSpot
        ↓
Calendly
        ↓
Proposal AI

---

# LONG-TERM GOAL

Build a largely automated outbound engine that:

- Finds ideal prospects
- Researches each company
- Qualifies opportunities
- Writes personalized emails
- Tracks conversations
- Books meetings
- Generates proposals
- Reports performance

while keeping a human involved for quality control on important decisions.

# Manual Workflow v1

Step 1

Find company

↓

Step 2

Run research prompt

↓

Step 3

Review AI report

↓

Step 4

Approve / Reject company

↓

Step 5

Generate cold email

↓

Step 6

Review email

↓

Step 7

Send manually

↓

Step 8

Track in HubSpot

↓

Step 9

Reply

↓

Book discovery call