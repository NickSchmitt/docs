# Language support

Reactr supports a growing number of languages for writing [Runnables](../atmo/concepts/runnables.md) in. Projects in the Suborbital ecosystem such as [Atmo](../atmo/) or [Sat](../sat/) use the Reactr runtime to execute these WebAssembly, allowing them to interface with the runtime through the [Runnable interface](../atmo/runnable-api/introduction#the-runnable-interface). The supported languages may vary across Reactr releases, and Runtime API support offered for some of these languages may be limited depending on the state of the current implementation.

This page explains the various levels of support for source languages in Reactr, as well as lists the currently supported languages and the potential caveats associated with them.


## Support status

### Stable

:::tip STATUS: STABLE
:::

Indicates complete support of language features and most, if not all Runnable APIs. The languages in this group are usually the first to receive updates when a new feature is added to the Runnable API.

Languages in this stage:
* [Rust](#rust)


### Beta

:::info STATUS: BETA
:::

Indicative of widespread support for language features and most Runnable APIs. Some newer or more complex APIs might be missing, and certain language features might be unimplemented, or may not be completely stable.

Languages in this stage:
* [Go](#go)
* [AssemblyScript](#assemblyscript)
* [Grain](#grain)
* [JavaScript / Typescript](#js-ts)


### Preview

:::caution STATUS: PREVIEW
:::

Support for the language has only been recently landed, or is considered experimental. Some language features may not work, or fail. Some Runnable APIs might not be implemented yet, or may not work as intended.

Languages in this stage:
* [Swift](#swift)


## Supported languages

### Rust
Rust support is implemented through the [native WebAssembly support](https://www.rust-lang.org/what/wasm) of the Rust compiler.

### Go
The Go support uses the [Tiny Go compiler](https://tinygo.org/) to target WebAssembly. While generally support for language features is good, please note that some Go features [may be unavailable or incomplete](https://tinygo.org/docs/reference/lang-support/) in this context.

### AssemblyScript
### Grain
### JavaScript & Typescript
### Swift
