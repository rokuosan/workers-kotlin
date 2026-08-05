declare module "*.wasm" {
  const module: WebAssembly.Module;
  export default module;
}

declare module "*.mjs" {
  export const importObject: WebAssembly.Imports;
  export function setWasmExports(exports: WebAssembly.Exports): void;
}
