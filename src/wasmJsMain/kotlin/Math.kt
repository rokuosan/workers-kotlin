import kotlin.wasm.ExperimentalWasmInterop
import kotlin.wasm.WasmExport

@OptIn(ExperimentalWasmInterop::class)
@WasmExport("double")
fun double(value: Int): Int = value * 2
