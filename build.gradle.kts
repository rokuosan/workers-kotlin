import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl

plugins {
    kotlin("multiplatform") version "2.4.10"
}

repositories {
    mavenCentral()
}

@OptIn(ExperimentalWasmDsl::class)
kotlin {
    wasmJs {
        nodejs()
        binaries.executable()
    }

    sourceSets {
        wasmJsTest.dependencies {
            implementation(kotlin("test"))
        }
    }
}
