import { Configuration, OpenAIApi } from "openai";
import {
  OPENAI_API_KEY,
  OPENAI_LENGH_HISTORY_TO_SAVE_MEMORY,
 } from '@env';

class ChatGPT {
    constructor() {
        this.configuration = new Configuration({
            apiKey: OPENAI_API_KEY,
            basePath: 'https://api.openai.com/v1/chat',
        });

        this.openai = new OpenAIApi(this.configuration);
        this.messageHistories = [];
    }

    reply(message, onFinish) {
        this.messageHistories.push({ role: "user", content: message });
        this.openai.createCompletion({
            model: "gpt-3.5-turbo",
            messages: this.messageHistories,
        })
        .then((completion) => {
            const completion_text = completion.data.choices[0].message.content;
            this.messageHistories.push({ role: "assistant", content: completion_text });
            onFinish(completion_text);
        })
        .catch((_error) => {
            const message = `[${new Date().toUTCString()}] Đã ghi nhận "${message}" | Nhưng đã gặp sự cố, không trả lời được, hãy thự lại sau!`;
            onFinish(message);
        });

        // Save memory!
        const lenghSaveMem = OPENAI_LENGH_HISTORY_TO_SAVE_MEMORY || '200';
        while (this.messageHistories.length > Number.parseInt(lenghSaveMem)) {
            this.messageHistories.shift();
        }
    }
}

export default ChatGPT;
