import { createChat } from '../app.js';
import { introConversation } from '../data/chat-data.js';

createChat({ prefix: 'hchat', data: introConversation });