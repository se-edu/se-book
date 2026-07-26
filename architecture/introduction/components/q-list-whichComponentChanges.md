<panel header="{{ icon_Q_A }} Which component changes?">

Consider the following architecture of a desktop invoice-manager software that you encountered earlier.
<box type="info" no-icon seamless>

<include src="{{ baseUrl }}/architecture/introduction/what/text.md#invoice-manager-architecture" />
</box>

For each change, name the component(s) where most of the work should fall, and why.

1. Invoices are saved to a database instead of a file.
1. A new command for postponing an invoice is added.
1. Invoices are displayed as cards instead of rows.
1. Every invoice gains an optional "priority" field that users can set and see.

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

1. `Storage` mainly — the others ask it to save and do not know the format, assuming its interface still fits.
1. `Logic` mainly, plus `Model` if postponing needs new state. `Ui` and `Storage` need not change if the command is typed as text.
1. `Ui` only.
1. All four — the field must be entered (`Ui`), validated (`Logic`), held (`Model`), and saved (`Storage`).

**A good architecture limits the spread of many kinds of change, but not every kind:** a change that genuinely crosses every responsibility will touch every component.

</panel>
</panel>
