# Wolsung Adventure  Generator

This project presents adventure generation using Procedural Generation algorithms and GPT model.

Adventure is dedicated for Wolsung second edition, and is presented in polish (as Wolsung is polish game).

## How to run

To run the project following ENV variables needs to be set:

- `OPENAI_API_KEY` - key generated for open AI platform https://platform.openai.com/api-keys

In order to use gpt model for given section flags
in [src/adventure/view/language/languageProcessor.configuration.ts](src/adventure/view/language/languageProcessor.configuration.ts).

When previous steps completed run following command

`npm run start:dev`

## How to use

Project exposes two endpoints

- http://localhost:8080/raw - raw output of procedural generation in JSON form.
- http://localhost:8080 - HTML response build from generated JSON, transformed by GPT model (or mock simplified
  hardcoded transformers).