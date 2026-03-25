# How to Add a New Article

## What you need before you start

1. Your article written and ready
2. An image for the article (recommended: 1200×630px, JPG)
3. A slug — the URL-safe version of your title, e.g. `what-salary-benchmarking-is`

---

## Step 1 — Add the image

Copy your article image into `/images/` and name it consistently:

```
/images/article-your-slug.jpg
```

Example:
```
/images/article-salary-benchmarking.jpg
```

---

## Step 2 — Create the markdown file

Create a new file in `/src/articles/` named after your slug:

```
/src/articles/your-slug.md
```

Example:
```
/src/articles/salary-benchmarking.md
```

---

## Step 3 — Write the frontmatter

Every article starts with a frontmatter block at the top of the file. Copy this template and fill it in:

```markdown
---
title: "Your Article Title Here"
date: "2026-03-22"
description: "One or two sentences summarising the article. This becomes the meta description shown in Google search results and link previews — make it specific and useful, not vague."
image: "/images/article-your-slug.jpg"
related:
  - slug-of-related-article
  - slug-of-another-related-article
---

Your article content starts here...
```

### Frontmatter fields explained

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Shown in the page hero and browser tab |
| `date` | Yes | Format must be `YYYY-MM-DD`. Controls ordering — newest first |
| `description` | Yes | Meta description for SEO. Keep it under 160 characters. Be specific |
| `image` | Yes | Path to your article image in `/images/`. Also used as the Open Graph image for link previews |
| `related` | No | List of slugs (filenames without `.md`) of other articles to link at the bottom. You choose these manually |

---

## Step 4 — Write the article in Markdown

After the frontmatter block, write your article using standard Markdown:

```markdown
Opening paragraph — no heading needed, just start writing.

## Section Heading

Your section content here.

## Another Section

- Bullet point
- Another point

**Bold text** for emphasis.
```

### SEO and AI retrieval tips

The setup already handles the technical SEO basics (title tag, meta description, Open Graph). What actually moves the needle is how you write:

- **`description` field** — this is your meta description. Write it like you're answering the question someone would Google. Specific beats vague every time
- **Slug** — keep it short and descriptive. The filename becomes the URL: `salary-benchmarking.md` → `yoursite.com/articles/salary-benchmarking/`
- **Headings** — use `##` for main sections. Both Google and AI retrieval tools (Perplexity, Google SGE) use heading structure to understand what your article covers
- **First paragraph** — answer the core question directly. Don't bury the lead. AI tools tend to pull from the opening of articles
- **No extra config needed** — the title, description, and Open Graph tags are all wired up automatically from your frontmatter

---

## Step 5 — Preview locally

```bash
npm run dev
```

Visit:
- `http://localhost:8080/articles/` — confirm your card appears, date is correct, newest first
- `http://localhost:8080/articles/your-slug/` — confirm the article renders correctly

---

## Step 6 — Build and deploy

```bash
npm run build
git add .
git commit -m "add: your article title"
git push
```

GitHub Pages will update within a minute or two.

---

## Checklist

Before pushing, quickly verify:

- [ ] Image is in `/images/` and the path in frontmatter matches exactly
- [ ] Date is in `YYYY-MM-DD` format
- [ ] Description is under 160 characters and actually describes the article
- [ ] Article appears at the top of `http://localhost:8080/articles/` (newest first)
- [ ] Article page looks correct at `http://localhost:8080/articles/your-slug/`
- [ ] Any `related` slugs you listed actually exist as `.md` files

---

## Quick reference — frontmatter template

```markdown
---
title: ""
date: "YYYY-MM-DD"
description: ""
image: "/images/article-.jpg"
related:
  - 
---
```
