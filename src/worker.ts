import wasm from "../build/compileSync/wasmJs/main/productionExecutable/kotlin/workers-kotlin.wasm";
import {
  importObject,
  setWasmExports,
} from "../build/compileSync/wasmJs/main/productionExecutable/kotlin/workers-kotlin.import-object.mjs";

const instance = new WebAssembly.Instance(wasm, importObject);
setWasmExports(instance.exports);
const { double } = instance.exports as { double(value: number): number };

export default {
  fetch(request) {
    const value = new URL(request.url).searchParams.get("value");
    const input = Number(value);

    if (
      value === null ||
      !Number.isInteger(input) ||
      input < -2_147_483_648 ||
      input > 2_147_483_647
    ) {
      return new Response("value must be a 32-bit integer", { status: 400 });
    }

    return Response.json({ input, output: double(input) });
  },
} satisfies ExportedHandler;
