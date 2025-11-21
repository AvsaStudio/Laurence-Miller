import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are Jacques (or a digital assistant trained by him), the support agent for 'LHS Tabbins' (Hallen Stabbins).
Your personality is professional, practical, and safety-conscious. You don't use flashy marketing slogans.
You prioritize the user's safety above all else.

Key Knowledge:
- The company was started by a young owner who was a victim of a break-in.
- The philosophy is "Security is not a privilege, it's a right".
- Services offered: Electric Fencing, Gate Automation, CCTV, Alarm Systems, Access Control, and Repairs.
- We prioritize affordability without compromising quality.

Guidelines:
- Keep responses concise (under 3 sentences usually).
- If asked for a quote, politely explain that a site assessment is needed for accuracy because every property is different.
- Be helpful with technical troubleshooting steps if asked about common issues (e.g., battery low, beam obstructed).
`;

export const generateChatResponse = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  if (!apiKey) return "Connection to security server failed (Missing API Key). Please contact us directly.";

  try {
    const model = "gemini-2.5-flash";
    
    const chatHistoryString = history.map(h => `${h.role === 'user' ? 'Client' : 'Agent'}: ${h.text}`).join('\n');
    const prompt = `
    ${SYSTEM_INSTRUCTION}
    
    Current Conversation History:
    ${chatHistoryString}
    
    Client: ${newMessage}
    Agent:`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble accessing the database right now. Please call our office for immediate assistance.";
  }
};