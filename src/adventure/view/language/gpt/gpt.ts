import OpenAI from 'openai';

export class Gpt {
  private readonly openAi = new OpenAI();

  constructor(
    private readonly setupMessage: OpenAI.ChatCompletionMessageParam,
  ) {
  }


  async get(prompt: string): Promise<string> {
    const completion = await this.openAi.chat.completions.create({
      messages: [
        this.setupMessage,
        {
          role: 'user',
          content: prompt,
        }],
      model: 'gpt-3.5-turbo-1106',
      response_format: { type: 'text' },

    });

    const response = completion.choices[0].message.content || '';

    console.log('Request to GPT made.');
    console.log({
      prompt,
      response,
    });

    return response;
  }
}