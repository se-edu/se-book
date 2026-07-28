# AGENTS.md

## Project Context

This project is an online software engineering textbook for beginners in a
computer science university degree program.

The website is generated using MarkBind.

The writing style uses bold-tldr-style skill.

## Guidance for Agents

- Treat the audience as early-stage computer science students. Prefer clear,
  precise explanations and avoid assuming prior professional software
  engineering experience.
- Preserve the textbook style and learning flow when editing content.
- Use American English.
- When writing or revising instructional prose, use the bold TLDR style: bold
  concise claims or self-contained sentence parts so the bold text forms a
  coherent skim-readable outline of the page.
- Follow existing MarkBind conventions in the repository for pages, includes,
  components, variables, and site configuration.
- Keep examples beginner-friendly and relevant to software engineering concepts.
- Avoid introducing tooling or formatting changes unrelated to the requested
  edit.
- The book is divided into chapters and each chapter is divided into units or topics. Try to minimize coupling between units even within a chapter. This is because in some places units will appear in order within a single page representing chapter but in other places each unit might be embedded into another page independently. For similar reasons, minimize hyper-linking between units. The more self-contained a unit is, the better it is.
- As units of chapters are sometimes embedded in different pages (without the rest of the chapter), avoid using the word 'chapter' e.g., 'in this chapter'. Instead, use 'textbook' e.g., 'in this textbook'.

## Capitalization of Headings and Titles

Chapter level and above uses Title Case; everything below uses sentence case.
The full convention — including the Title Case definition, the proper-noun and
code-identifier carve-outs, the one-canonical-name-per-chapter rule and the
surfaces it spans, and how to audit the site — lives in the `markbind-author-source`
skill, in `references/heading-capitalization.md`. Read that before writing or
renaming any heading, chapter, or unit title. This book follows it as written,
with no local exceptions.
