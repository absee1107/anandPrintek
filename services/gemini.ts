
import { GoogleGenAI } from "@google/genai";

// Use this service to get AI-generated responses for customer inquiries.
export const getAIAssistantResponse = async (userPrompt: string) => {
  // Always initialize GoogleGenAI with a named parameter using process.env.API_KEY.
  // Initializing inside the function ensures the most up-to-date environment key is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an AI assistant for "Anand Printek Enterprise", a leader in printing and educational supplies in India. 
        Your goal is to help users with:
        1. Providing rough price estimates based on our general pricing (e.g., STEM kits INR 100-5000, Projectors 15k-80k).
        2. Explaining printing techniques (Offset vs Flex).
        3. Suggesting school accessories.
        Keep your tone professional, helpful, and friendly. Mention that official quotes can be requested through our "Get a Quote" page.`,
      },
    });
    
    // Use .text property directly as per the latest @google/genai SDK guidelines.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting right now. Please call our supervisor at +91 9973707263 for immediate assistance.";
  }
};
