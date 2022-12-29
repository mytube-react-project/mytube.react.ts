import { setupWorker } from 'msw';
import { handlers } from './apis/handler';
export const worker = setupWorker(...handlers);
