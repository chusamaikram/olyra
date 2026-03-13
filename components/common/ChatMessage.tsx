"use client"
import React from 'react'
import Image from 'next/image'
import Avatar from "@/assets/images/Avatar.png"
import { OlyraBotIcon } from '@/assets/CustomIcons'
import { CheckCheck } from 'lucide-react'

interface ChatMessageProps {
  message: string
  isUser: boolean
  timestamp?: string
  isTyping?: boolean
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp, isTyping }) => {
  const formatTime = (timestamp?: string) => {
    if (!timestamp) return ''
    const date = new Date(timestamp)
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  }
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start gap-2 max-w-[70%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center `}>
          {isUser ?
            <Image src={Avatar} alt='user avatar' />
            :
            <OlyraBotIcon />
          }
        </div>

        {/* Message Bubble */}
        <div className={`p-3 rounded-2xl flex items-end justify-between gap-2.5 ${isUser
          ? 'bg-[#ADB37D] text-white '
          : 'bg-white text-[#71717A] border border-[#E4E4E7] '
          }`}>
          {isTyping ? (
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#71717A] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#71717A] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-[#71717A] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          ) : (
            <>
              <p className="text-sm leading-relaxed">{message}</p>
              <div className='flex items-center gap-1 '>
                <span className={`text-xs mt-1 ${isUser ? 'text-[#F3F4EC]' : 'text-[#71717A]'}`}>{formatTime(timestamp)}</span>
                {isUser && <CheckCheck size={16} color='#F3F4EC' />}

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatMessage