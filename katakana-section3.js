import { createChat } from '../app.js';
import { katakanaConversation } from '../data/katakana-chat-data.js';

createChat({ prefix: 'kchat', data: katakanaConversation });