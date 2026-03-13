"use client"
import { Send } from 'lucide-react'
import React, { useState } from 'react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="pt-4 bg-white">
      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Message to Client..."
            disabled={disabled}
            className="hidden md:block w-full p-4 border border-[#E2E8F0] text-[#484A54] text-base font-medium rounded-xl resize-none  outline-none"
            rows={3}
          />
          <button
            type="submit"
            disabled={!message.trim() || disabled}
            className="absolute right-4 bottom-4 px-4 py-2 bg-[#BE735B] text-white rounded-md hover:bg-[#A86650] hidden md:flex items-center gap-2"
          >
            <span className="text-sm font-medium">Send</span>
            <Send size={16} />
          </button>
          <div className='flex md:hidden px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white w-full  items-center gap-2'>
            <input
              type='text'
              placeholder='Message to Client...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className='text-base font-medium outline-none w-full h-full'
            />
            <button
              type="submit"
              disabled={!message.trim() || disabled}
              className="px-3 py-2 bg-[#BE735B] text-white rounded-md hover:bg-[#A86650] flex items-center gap-2"
            >
              <span className="text-sm font-medium">Send</span>
              <Send size={16} />
            </button>

          </div>
        </div>
      </form>
      <p className="text-sm text-[#484A54] mt-3 text-center">
        Olyra Chat can make mistakes. Consult all answers with your doctor.
      </p>
    </div>
  )
}

export default ChatInput