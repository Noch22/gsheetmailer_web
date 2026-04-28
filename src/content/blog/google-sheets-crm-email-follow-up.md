---
title: "Google Sheets as a CRM for email follow-ups: a lightweight approach"
description: "How to use Google Sheets as a simple CRM for managing email follow-ups, sales pipelines, and outreach tracking with Gmail."
lang: "en"
publishDate: "2026-04-28"
keywords:
  - "google sheets crm email follow up"
  - "google sheets as crm gmail"
  - "sales follow up google sheets"
  - "email tracking google sheets"
  - "lightweight crm google sheets gmail"
---

Not every team needs Salesforce. For freelancers, small sales teams, and early-stage startups, **Google Sheets can serve as a functional CRM for email follow-ups** — especially when paired with Gmail and GSheetMailer.

Here is how to build a simple, effective follow-up system without purchasing dedicated CRM software.

## Why Google Sheets works as a lightweight CRM

A CRM at its core is a structured list of contacts with status tracking and communication history. Google Sheets delivers exactly that:

- **Free**: no subscription fees.
- **Accessible**: works in any browser, shareable with your team.
- **Flexible**: customize columns to match your specific process.
- **Connected to GSheetMailer**: send follow-up emails directly from the same tool.

For lists under a few hundred contacts, it's perfectly adequate.

## Building your Google Sheets CRM

Here is a recommended structure for a sales follow-up CRM:

| Email | FirstName | Company | Status | Last Contact | Next Follow-up | Notes |
|---|---|---|---|---|---|---|
| alice@acme.com | Alice | Acme | In progress | 2026-04-20 | 2026-04-27 | Requested demo |
| bob@tech.io | Bob | TechIO | Follow-up 1 | 2026-04-22 | 2026-04-29 | No response yet |
| carol@firm.co | Carol | TheFirm | Closed | 2026-04-15 | — | Signed up |

**Status values** (customize as needed):
- `New`: not yet contacted
- `In progress`: contacted, awaiting response
- `Follow-up 1 / 2 / 3`: sent one or more follow-ups
- `Interested`: replied positively, in conversation
- `Closed`: converted
- `Not interested`: explicitly declined

## Sending follow-up emails with GSheetMailer

When it's time to follow up, filter your sheet by status:

1. Filter on `Status = "Follow-up 1"` (or whichever stage needs a follow-up).
2. Copy filtered rows to a "Send" tab, or keep them filtered.
3. Open GSheetMailer, point to your sheet, apply a follow-up template.
4. Send.
5. Update the `Status` and `Last Contact` columns.

The key advantage over a pure CRM: your email sending is in the same tool as your contact tracking, with no copy-pasting between systems.

## Follow-up email templates for different stages

**After no response (Follow-up 1, ~5 days later):**
```
Subject: Re: My message last week

Hi {{FirstName}},

Just wanted to make sure my previous email didn't get lost.
Happy to share more if {{Company}} is exploring solutions in this area.

Best,
[Your name]
```

**Second follow-up (10 days later, lighter tone):**
```
Subject: Last check-in

Hi {{FirstName}},

I'll keep this brief — still happy to connect if the timing is right.
Otherwise, no worries at all.

Best,
[Your name]
```

**Closing follow-up ("breakup email"):**
```
Subject: Closing the loop

Hi {{FirstName}},

I don't want to be a bother, so this'll be my last message.
If things change down the road, you know where to find me.

Wishing you well,
[Your name]
```

Breakup emails often get the highest reply rate of all follow-ups — the finality prompts a response.

## Tracking your pipeline in Google Sheets

Add a summary tab to your CRM sheet with formulas:

```
Active leads: =COUNTIF(Status column, "In progress") + COUNTIF(Status column, "Follow-up*")
Interested: =COUNTIF(Status column, "Interested")
Closed: =COUNTIF(Status column, "Closed")
Conversion rate: =Closed / (Active + Interested + Closed)
```

This gives you a live pipeline overview without any additional tool.

## Team collaboration on a shared CRM sheet

Google Sheets supports real-time collaboration. For teams:

- Share the sheet with edit access.
- Use a "Owner" column to assign contacts to specific team members.
- Filter by Owner when running GSheetMailer to ensure each person only sends their own emails.
- Color-code status values with conditional formatting for quick visual scanning.

## FAQ

**When does a Google Sheets CRM become insufficient?**
When you exceed a few hundred active contacts, need automated sequences, want pipeline analytics, or need deep integration with other tools (calendar, phone, etc.). At that point, consider HubSpot Free, Notion CRM, or Pipedrive.

**Can multiple people send emails from the same GSheetMailer sheet?**
Yes, but each person sends from their own Gmail account. The shared sheet stores the data; each team member runs their own instance of GSheetMailer.

**How do I prevent two people from sending to the same contact?**
Use the "Owner" column and filter before sending. Or use a "Sent by" column that gets filled in after each send.

## Conclusion

A **Google Sheets CRM for email follow-ups** is a practical starting point for any team that wants to stay organized without CRM software costs. Pair it with GSheetMailer for seamless, personalized follow-up emails from Gmail.
