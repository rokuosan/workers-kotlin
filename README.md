# Kotlin/Wasm on Cloudflare Workers PoC

```sh
npm install
npm run dev
curl 'http://localhost:8787/?value=21'
# {"input":21,"output":42}
```

`src/wasmJsMain/kotlin/Math.kt` is compiled to Wasm. `src/worker.ts` imports that
module and instantiates it once per Worker isolate; the Worker only handles HTTP.
`wrangler.jsonc` defines `process` as `undefined` so the generated Node-only
loader branch is removed from the Worker bundle.

```sh
mise exec -- gradle wasmJsNodeTest
npm run check
```
