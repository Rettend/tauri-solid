# Tauri Solid

[![Badge](https://img.shields.io/github/package-json/dependency-version/Rettend/tauri-solid/@tauri-apps/api?color=dea584&label=tauri)](https://beta.tauri.app/)
[![Badge](https://img.shields.io/github/package-json/dependency-version/Rettend/tauri-solid/solid-js?color=2c4f7c&label=solid)](https://solidjs.com/)
[![Badge](https://img.shields.io/badge/UnoCSS-4D4D4D)](https://unocss.dev/)
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## 🚀 Install

> [!TIP]
> Install [ni](https://github.com/antfu/ni) and choose `pnpm`.
>
> ```bash
> npm i -g @antfu/ni
> ```

### Install `tauri` and `pnpm` globally

```bash
ni -g @tauri-apps/cli@next pnpm
```

If you skip this step, you will need to run the tauri scripts like this: `npx tauri dev` or `nr tauri dev`.

### Install dependencies

```bash
ni
```

## 🥏 Run

- dev (browser): `nr dev`

### Desktop

- dev: `tauri dev`
- build: `tauri build`

### Mobile

- initialize for android/ios: `tauri [android|ios] init` (only once)
- dev: `tauri [android|ios] dev`
- open in android studio/xcode: `tauri [android|ios] open`
- build: `tauri [android|ios] build`
