import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mic,
  Paperclip,
  Smile,
  Check,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  ArrowLeft,
  Camera,
} from 'lucide-react';
import { type ChatMessage, type ChatRequestMessage } from '../lib/chat';
import { formatTime, cx } from '../lib/utils';

const EMOJIS = ['😀','😁','😂','🙂','😍','😎','🤔','👍','🙏','👏','🔥','✨','💡','✅','❤️','🎉','🚀','💼','📈','🤝'];

const GREETING: ChatMessage = {
  id: 'greeting',
  role: 'assistant',
  content:
    "Hi, I'm Emma \u2014 your consultant at Nexora. \ud83d\udc4b\n\nI help businesses like yours find the right AI automations to save time and grow faster. Mind telling me a little about what your business does?",
  timestamp: Date.now(),
  status: 'read',
};

export default function ChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback((smooth = true) => {
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
    });
  }, []);

  useEffect(() => {
    scrollToBottom(false);
  }, [scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now(),
      status: 'sent',
    };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setShowEmoji(false);

    // mark delivered shortly after
    setTimeout(() => {
      setMessages((m) => m.map((msg) => (msg.id === userMsg.id ? { ...msg, status: 'delivered' } : msg)));
    }, 400);

    setIsTyping(true);

    const assistantId = `a-${Date.now()}`;
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: [
            ...messages
              .filter((m) => m.id !== 'greeting' || true)
              .map((m) => ({ role: m.role, content: m.content } as ChatRequestMessage)),
            { role: 'user' as const, content: text },
          ],
        }),
      });

      if (!res.ok || !res.body) {
        const errText = await res.text().catch(() => '');
        throw new Error(errText || `Request failed (${res.status})`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let firstChunk = true;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        // Server-Sent-Events style: lines starting with "data:"
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) continue;
          const data = trimmed.slice(5).trim();
          if (data === '[DONE]') continue;
          try {
            const json = JSON.parse(data);
            const delta: string = json.choices?.[0]?.delta?.content ?? '';
            if (!delta) continue;

            if (firstChunk) {
              firstChunk = false;
              setIsTyping(false);
              setStreamingId(assistantId);
              setMessages((m) => [
                ...m,
                { id: assistantId, role: 'assistant', content: delta, timestamp: Date.now(), status: 'delivered' },
              ]);
            } else {
              setMessages((m) =>
                m.map((msg) =>
                  msg.id === assistantId ? { ...msg, content: msg.content + delta } : msg,
                ),
              );
            }
          } catch {
            // ignore malformed chunk
          }
        }
      }

      // If assistant never produced content, show a graceful fallback
      if (firstChunk) {
        setIsTyping(false);
        setMessages((m) => [
          ...m,
          {
            id: assistantId,
            role: 'assistant',
            content:
              "I'm having trouble connecting to my brain right now. Could you try that again? If it persists, our team can help at hello@nexora.ai.",
            timestamp: Date.now(),
            status: 'delivered',
          },
        ]);
      }
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      setIsTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. Please try again in a moment, or reach us at hello@nexora.ai.",
          timestamp: Date.now(),
          status: 'delivered',
        },
      ]);
    } finally {
      setStreamingId(null);
      abortRef.current = null;
      inputRef.current?.focus();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const addEmoji = (e: string) => {
    setInput((s) => s + e);
    inputRef.current?.focus();
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative h-[640px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
        {/* Header */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-3 bg-ink-800/90 px-4 py-3 backdrop-blur-xl">
          <button className="text-ink-200 transition-colors hover:text-white lg:hidden" aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white to-ink-300 text-sm font-semibold text-ink-950">
              E
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-800 bg-emerald-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">Emma \u00b7 Nexora</p>
            <p className="truncate text-[11px] text-emerald-300">
              {isTyping ? 'typing\u2026' : 'online'}
            </p>
          </div>
          <div className="flex items-center gap-4 text-ink-200">
            <button className="transition-colors hover:text-white" aria-label="Call"><Video size={18} /></button>
            <button className="transition-colors hover:text-white" aria-label="Voice call"><Phone size={16} /></button>
            <button className="transition-colors hover:text-white" aria-label="More"><MoreVertical size={18} /></button>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="wa-pattern absolute inset-0 overflow-y-auto px-3 pb-24 pt-[68px]"
        >
          <div className="mx-auto mt-3 w-fit rounded-full bg-black/30 px-3 py-1 text-[10px] text-ink-200 backdrop-blur">
            Today
          </div>

          <div className="mt-3 grid gap-1.5">
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <Bubble key={m.id} message={m} streaming={m.id === streamingId} />
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="flex w-fit max-w-[80%] items-center gap-1.5 rounded-2xl rounded-tl-sm bg-ink-700/90 px-4 py-3"
              >
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Emoji panel */}
        <AnimatePresence>
          {showEmoji && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="glass-strong absolute bottom-[76px] left-3 right-3 z-20 grid grid-cols-10 gap-1 rounded-2xl p-3"
            >
              {EMOJIS.map((e) => (
                <button
                  key={e}
                  onClick={() => addEmoji(e)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-lg transition-transform hover:scale-125"
                >
                  {e}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Composer */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-ink-800/90 px-3 py-3 backdrop-blur-xl">
          <div className="flex items-end gap-2">
            <button
              onClick={() => setShowEmoji((v) => !v)}
              className={cx(
                'flex h-10 w-10 flex-none items-center justify-center rounded-full transition-colors',
                showEmoji ? 'text-white' : 'text-ink-200 hover:text-white',
              )}
              aria-label="Emoji"
            >
              <Smile size={20} />
            </button>
            <button
              className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-ink-200 transition-colors hover:text-white"
              aria-label="Attach"
            >
              <Paperclip size={20} />
            </button>
            <button
              className="hidden h-10 w-10 flex-none items-center justify-center rounded-full text-ink-200 transition-colors hover:text-white sm:flex"
              aria-label="Camera"
            >
              <Camera size={20} />
            </button>

            <div className="flex flex-1 items-end rounded-3xl bg-ink-700/80 px-4 py-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Type a message"
                className="max-h-24 w-full resize-none bg-transparent text-sm text-white placeholder:text-ink-300 focus:outline-none"
                style={{ height: 'auto' }}
                onInput={(e) => {
                  const t = e.currentTarget;
                  t.style.height = 'auto';
                  t.style.height = `${Math.min(t.scrollHeight, 96)}px`;
                }}
              />
            </div>

            {input.trim() ? (
              <button
                onClick={sendMessage}
                disabled={isTyping}
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white text-ink-950 transition-transform hover:scale-105 disabled:opacity-50"
                aria-label="Send"
              >
                <Send size={17} />
              </button>
            ) : (
              <button
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white text-ink-950 transition-transform hover:scale-105"
                aria-label="Voice message"
              >
                <Mic size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ message, streaming }: { message: ChatMessage; streaming: boolean }) {
  const isUser = message.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cx('flex w-full', isUser ? 'justify-end' : 'justify-start')}
    >
      <div
        className={cx(
          'relative max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm',
          isUser
            ? 'rounded-tr-sm bg-[#005c4b] text-white'
            : 'rounded-tl-sm bg-ink-700/90 text-ink-50',
        )}
      >
        <p className="whitespace-pre-wrap break-words">
          {message.content}
          {streaming && (
            <span className="ml-0.5 inline-block h-3.5 w-0.5 translate-y-0.5 animate-blink-caret bg-white/80" />
          )}
        </p>
        <div className="mt-1 flex items-center justify-end gap-1">
          <span className="text-[10px] text-white/60">{formatTime(new Date(message.timestamp))}</span>
          {isUser && (
            <span className="text-white/60">
              {message.status === 'read' || message.status === 'delivered' ? (
                <CheckCheck size={13} className={message.status === 'read' ? 'text-sky-300' : ''} />
              ) : (
                <Check size={13} />
              )}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
