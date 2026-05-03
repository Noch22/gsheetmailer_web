---
applyTo: "src/content/blog/**/*.md"
description: "Use when creating or editing blog markdown posts. Enforce GSheetMailer blog template, schema-valid frontmatter, SEO structure, and conversion-oriented CTA."
---

# Blog template instructions

Use this template for every post in `src/content/blog`.

## Required frontmatter

Always include this exact frontmatter shape and key names:

```yaml
---
title: "<clear keyword-focused title>"
description: "<140-160 char summary aligned with search intent>"
lang: "fr" # or "en"
publishDate: "YYYY-MM-DD"
updatedDate: "YYYY-MM-DD" # optional
draft: false
keywords:
  - "<primary keyword>"
  - "<secondary keyword>"
  - "<secondary keyword>"
---
```

Validation rules:
- `lang` must be only `fr` or `en`.
- `publishDate` and `updatedDate` must be valid dates in `YYYY-MM-DD` format.
- `keywords` must be a YAML array (not a comma-separated string).
- Keep `draft: false` unless explicitly requested.

## Article structure

Use this content outline in order:

1. Intro (problem + promise in 2-4 short paragraphs)
2. 3-step explanation of how to do the task with GSheetMailer
3. Practical setup checklist
4. Mistakes to avoid / deliverability best practices
5. FAQ (3-6 concise Q&A)
6. Conclusion with CTA to install extension

## Writing style

- Write for non-technical users.
- Keep paragraphs short and concrete.
- Prefer practical examples over generic theory.
- Keep tone trustworthy, clear, and product-oriented.

## SEO and conversion guardrails

- One primary keyword per article; include it naturally in title, intro, and at least one H2.
- Use 4-8 semantic variations naturally (no keyword stuffing).
- Avoid unverified claims about pricing, performance, legal compliance, or integrations.
- Include a clear CTA to install the extension.
- When relevant, add a trust mention pointing to the privacy policy page.

## Internal links

When contextually relevant, add:
- 2-4 links to related posts in `src/content/blog`
- 1 link to homepage
- 1 link to privacy page when discussing trust, data, or permissions

## Suggested post scaffold

```md
---
# frontmatter here
---

Intro...

## Step 1: ...

## Step 2: ...

## Step 3: ...

## Checklist

- ...

## Mistakes to avoid

- ...

## FAQ

### Question 1
Answer...

### Question 2
Answer...

## Conclusion

Short recap + install CTA.
```
