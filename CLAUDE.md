# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application with the App Router, using TypeScript, React 19, and Tailwind CSS v4. It's a standard Next.js setup bootstrapped with `create-next-app`.

## Development Commands

- **Development server**: `npm run dev` - Starts development server at http://localhost:3000
- **Build**: `npm run build` - Creates optimized production build
- **Production server**: `npm start` - Runs production server (requires build first)
- **Lint**: `npm run lint` - Runs ESLint with Next.js config

## Project Structure

- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout with font configuration (Geist Sans and Geist Mono)
  - `page.tsx` - Homepage component
  - `globals.css` - Global styles and Tailwind directives
- `public/` - Static assets (SVG files for UI)
- Path alias: `@/*` maps to root directory (configured in tsconfig.json)

## Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **React**: 19.1.0
- **TypeScript**: v5 (strict mode enabled)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Next.js font optimization with Geist fonts

## Configuration Notes

- ESLint uses Next.js flat config with `next/core-web-vitals` and `next/typescript` presets
- TypeScript targets ES2017 with strict mode
- Tailwind CSS v4 uses the new `@tailwindcss/postcss` package
- Module resolution set to "bundler" for optimal Next.js compatibility
