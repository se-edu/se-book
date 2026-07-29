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
- **Never badge a term in these places:**
  - **A heading or a unit title.**
  - **An example**, whether a `{{ label_example }}` aside or a
    `show_example()` block. Examples illustrate a term introduced in the
    surrounding prose; they are not where a term gets introduced. If an example
    needs a gloss for an incidental word, use a plain `<tooltip>`. If a term
    genuinely needs introducing, badge it in the prose the example serves.
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

## Presenting Examples

Examples are set apart from the prose, so the reader can tell at a glance what
is an illustration and what is the point being illustrated. Two forms are used,
by length. The `debugging`, `security`, and `requirements` chapters are the
worked references for both.

**Short example — `{{ label_example }}`**, a variable defined in
`_markbind/variables.md`. It renders a small "Example" badge, and the example
text follows it wrapped in `%%...%%` (dimmed text). Use it for a single
sentence or two that immediately follows the claim it illustrates:

```
**Identifying requirements is often not easy.**<br>
{{ label_example }} %%Stakeholders may not be aware of their precise needs.%%
```

Put it on its own line, after a `<br>` when it hangs off a bold claim or a
bullet, so the claim stays skim-readable on its own.

**Longer example — the `show_example()` macro** from `common/macros.njk`,
called as a Nunjucks `call` block. It renders a boxed, indented block with an
"Example" pill, and is collapsible via the site-wide examples toggle. Use it
when the example runs to a list, a code snippet, a blockquote, a table, or more
than a couple of sentences:

```
{% call show_example() %}
One scheme for categorizing requirements:

* `Essential`: The product must fulfill this requirement.
...
{% endcall %}
```

Import it in the first line of the `text.md`, alongside any other macros the
file uses:

```
{% from "common/macros.njk" import show_example, show_term with context %}
```

Apply the two forms as follows:

- **Choose by length, not by importance.** One or two sentences take
  `{{ label_example }}`; anything with block content takes `show_example()`.
- **Start a `show_example()` block with a line of plain text**, never straight
  into a `<div>`, `<pre>`, `<puml>`, or other block-level tag. The macro places
  the caller's first line beside the "Example" pill, so a block-level tag lands
  inside a paragraph, and MarkBind silently drops the rest of the page from
  that point on. Where the old `<box>` had no lead-in, write one.
- **Convert the older `<box>` + `{{ icon_example }}` pattern** to one of these
  two when revising a page. A `<box>` whose entire content is an example
  becomes a `show_example()` block; the `{{ icon_example }}` lead-in is then
  redundant and comes out.
- **Drop the `e.g.` or `for example` that merely announced the example**, since
  the badge now says so. Keep an `e.g.` that is doing work inside the example
  itself, such as one giving instances of a category the example lists.
- **One example per block.** Where an old box held two `{{ icon_example }}`
  groups on unrelated points, split it into sibling `show_example()` blocks.
  Keep them in one block only when they are facets of a single example, with an
  inner lead-in line to separate them.
- **Do not put a `show_example()` block inside a `<box>` or inside another
  `show_example()`.** It carries its own framing, and box-in-box reads as
  clutter. Inside a `<panel>` or a `<tab>` it is fine; those are
  progressive-disclosure containers, not framing.
- **A `<panel>` whose header is the example label stays a panel.** Converting
  it would lose the deliberate expand/collapse state. Where a unit shows one
  example by default and offers another behind a collapsed panel, make the
  default one a `show_example()` and leave the collapsed one as a panel.
- **Attribute examples honestly.** If a list of examples is drawn from several
  different systems, do not frame it as coming from one.
- **Keep the prose complete without the examples.** Because examples can be
  toggled off, a claim must not depend on its example to be understood.
