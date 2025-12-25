
import Groq from 'groq-sdk';

const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const client = new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true });

export async function groqCompletion(input: string) {
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: input }
      ],
      max_tokens: 150,
    });
    console.log('GROQ Response:', response);
    return response;
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'message' in error) {
      return { error: (error as { message: string }).message };
    }
    return { error: String(error) };
  }
}