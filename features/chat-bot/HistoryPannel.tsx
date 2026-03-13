"use client"
import { NewChat } from '@/assets/CustomIcons'
import { EllipsisVertical, SquarePen, Trash2 } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'

interface HistoryPannelProps {
    handleNewChat: () => void
    chatData: {
        chatHistory: Array<{
            id: string
            title: string
            lastMessage: string
            timestamp: string
        }>
    }
    selectedChatId: string
    setSelectedChatId: (id: string) => void
    onRenameChat?: (chatId: string, newTitle: string) => void
    onDeleteChat?: (chatId: string) => void
    width?: string
}

const HistoryPannel = ({ handleNewChat, chatData, selectedChatId, setSelectedChatId, onRenameChat, onDeleteChat, width = "max-w-[218px]" }: HistoryPannelProps) => {
    const [chatMenu, setChatMenu] = useState<string | null>(null)
    const [isRenaming, setIsRenaming] = useState<string | null>(null)
    const [renameValue, setRenameValue] = useState('')
    const menuRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setChatMenu(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Focus input when renaming starts
    useEffect(() => {
        if (isRenaming && inputRef.current) {
            inputRef.current.focus()
            inputRef.current.select()
        }
    }, [isRenaming])

    const handleRenameStart = (chatId: string, currentTitle: string) => {
        setIsRenaming(chatId)
        setRenameValue(currentTitle)
        setChatMenu(null)
    }

    const handleRenameSubmit = (chatId: string) => {
        if (renameValue.trim() && onRenameChat) {
            onRenameChat(chatId, renameValue.trim())
        }
        setIsRenaming(null)
        setRenameValue('')
    }

    const handleRenameCancel = () => {
        setIsRenaming(null)
        setRenameValue('')
    }

    const handleDelete = (chatId: string) => {
        if (onDeleteChat) {
            onDeleteChat(chatId)
        }
        setChatMenu(null)
    }

    const handleKeyPress = (e: React.KeyboardEvent, chatId: string) => {
        if (e.key === 'Enter') {
            handleRenameSubmit(chatId)
        } else if (e.key === 'Escape') {
            handleRenameCancel()
        }
    }
    return (
        <aside className={`flex py-6 ${width} w-full sticky top-0 left-0 bg-white rounded-xl flex-col items-center gap-7 h-full`}>
            <button onClick={handleNewChat} type='button' aria-label='new chat button' className='flex items-center justify-center gap-3'>
                <NewChat />
                <span className='text-base/6 text-[#535862]'>New Chat</span>
            </button>
            <div className='w-full flex flex-col items-start gap-4 h-full'>
                <span className='text-sm/5 text-[#535862] px-4 '>Your Chats</span>
                <ul className='px-4 flex flex-col items-start w-full space-y-1 h-full overflow-y-auto custom-scrollbar'>
                    {chatData.chatHistory.map((chat) => (
                        <li key={chat.id} className='flex items-center justify-between w-full'>
                            <button
                                onClick={() => setSelectedChatId(chat.id)}
                                className={`px-3 py-2 rounded-xl overflow-hidden w-full text-left transition-colors duration-300 ease-in-out ${selectedChatId === chat.id ? 'bg-[#FFF4F2]' : 'bg-white hover:bg-[#f8f9fa]'
                                    }`}
                            >
                                {isRenaming === chat.id ? (
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={renameValue}
                                        onChange={(e) => setRenameValue(e.target.value)}
                                        onKeyDown={(e) => handleKeyPress(e, chat.id)}
                                        onBlur={() => handleRenameSubmit(chat.id)}
                                        className="w-full bg-transparent border-none outline-none text-base/6 text-[#535862]"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                ) : (
                                    <span className='line-clamp-1 text-base/6 text-[#535862] text-left'>{chat.title}</span>
                                )}
                            </button>
                            <button type='button' onClick={() => setChatMenu(chatMenu === chat.id ? null : chat.id)} aria-label='chat history controls' className='relative'>
                                <EllipsisVertical size={16} color='#484A54' />
                                {chatMenu === chat.id && (
                                    <div ref={menuRef} className='absolute right-0 top-full shadow-lg rounded-xl p-2 z-10 w-[178px] border border-[#E9EAEB] bg-white'>
                                        <button
                                            onClick={() => handleRenameStart(chat.id, chat.title)}
                                            className='px-2.5 py-2 rounded-lg flex items-center gap-2 w-full hover:bg-gray-50 transition-colors'
                                        >
                                            <SquarePen size={14} color='#414651' />
                                            <span className='text-sm/5 font-medium text-[#717680]'>Rename Chat</span>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(chat.id)}
                                            className='px-2.5 py-2 rounded-lg flex items-center gap-2 w-full hover:bg-red-50 transition-colors'
                                        >
                                            <Trash2 size={16} color='#414651' />
                                            <span className='text-sm/5 font-medium text-[#717680]'>Delete Chat</span>
                                        </button>
                                    </div>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default HistoryPannel