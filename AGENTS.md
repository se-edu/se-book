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

## Marking New Technical Terms

New technical terms are highlighted with the `show_term()` Nunjucks macro
defined in `common/macros.njk`, which renders the term as a tinted badge. It is
specific to this book. Import it as the first line of every `text.md` that uses
it:

```
{% from "common/macros.njk" import show_term with context %}
```

Where the macro takes a second argument, that text becomes a hover popover:
`{{ show_term("volatility", "how often data changes") }}`.

Apply it as follows:

- **Badge core technical terms only** — something the reader must learn as a
  named concept, not a descriptive phrase. Multi-word terms are fine when the
  whole thing is the term, e.g., `trust boundary`, `misuse case`,
  `non-functional requirements`.
- **Badge each term once per chapter.** Every other mention stays plain,
  whether it comes before or after the badged one. The same concept may be
  badged again in a different chapter, because units are often read in
  isolation.
- **Put the badge where the term does real work** — the sentence that defines
  it or uses it substantively — rather than mechanically on the first
  occurrence. Skip preview, overview, and passing mentions. For example,
  `probe` appears incidentally in the `how` and `fixing` units of the
  `debugging` chapter but is badged later, in the `tools` unit, where it is
  actually defined.
- **Never badge a term inside a heading or a unit title.**
- **Drop italic emphasis at the badged occurrence.** Write
  `{{ show_term("brownfield") }}`, not `_{{ show_term("brownfield") }}_` or
  `{{ show_term("_brownfield_") }}`; the badge is the "new term" signal.
  Italics on the term elsewhere, and on other words, are unaffected.
- **Keep the term in the form the sentence uses**, including plural and
  sentence-initial capitalization, e.g., `{{ show_term("stakeholders") }}`.
- **Prefer `show_term(term, definition)` over `<tooltip>` when the glossed word
  is itself a term being introduced.** Keep a plain `<tooltip>` for incidental
  gloss words that the reader is not expected to learn as terminology.
- **A term that also has a `common/definitions.md` box keeps its box.** Badge
  the term where it appears in the surrounding prose and leave the box
  unchanged.
- The badge renders correctly inside `**bold**`, so a bold TLDR claim can carry
  one, e.g., `**A {{ show_term("software requirement") }} specifies a need to
  be fulfilled by the software product.**`
