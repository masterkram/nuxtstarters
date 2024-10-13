---
tags:
  - AI
  - free
card_image: /listing/ai_chat.png
description: AI LLM Playground made with Nuxt
---

# AI Chat

::links
- [demo](https://hub-chat.nuxt.dev)
- [github](https://github.com/ra-jeev/hub-chat)
::

This is a real app running on nuxt hub which let's you interact with over 30 different Large Language Models for free. However it's also a template which lets you quickly build an LLM based app using Nuxt if you need to support a chat interface.

![ai chat screenshot](/ai-chat.png)

## Features

- Select the text generation model to interact with
- Set different LLM parameters (`temperature`, `max tokens`, `system prompt`, `top_p`, `top_k`, etc.)
- Toggle LLM response streaming on/off
- Handle streaming and non-streaming LLM responses on both server and client sides
- Parse and display markdown in LLM responses
- Auto-scroll chat container as responses are streamed
- Dark mode support

## Stack

- Nuxt: Vue.js framework for the application foundation
- Nuxt UI: Module for creating a sleek and responsive interface
- Nuxt MDC: For parsing and displaying chat messages
- NuxtHub: Deployment and administration platform for Nuxt, powered by Cloudflare
