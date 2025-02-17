# Creating Runnables

:::note
Make sure you [have the prerequisites installed](../get-started#prerequisites) before proceeding.
:::

You can create a new Runnable with subo:

```bash
subo create runnable myfunction
```

By default, Rust will be used. To use JavaScript, pass `--lang`:

```bash
subo create runnable myjavascriptfunction --lang=javascript
```

Each runnable has a `.runnable.yaml` that describes it.
The name you provide to the `create runnable` command is the
name that will be used to call the Runnable in [Directive](../concepts/the-directive)
handlers, which are discussed next.

Your Runnables will use the [Runnable API](../runnable-api/introduction.md) to access
resources such as the network, files, and more.

