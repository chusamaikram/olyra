"use client"
import { NewChat } from '@/assets/CustomIcons'
import ChatInput from '@/components/common/ChatInput'
import ChatMessage from '@/components/common/ChatMessage'
import MainHeading from '@/components/common/MainHeading'
import { ArrowLeft, EllipsisVertical } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import HistoryPannel from './HistoryPannel'

interface ChatData {
    chatHistory: Array<{
        id: string
        title: string
        lastMessage: string
        timestamp: string
    }>
    messages: {
        [key: string]: Array<{
            id: string
            message: string
            isUser: boolean
            timestamp: string
        }>
    }
}

const ChatBotView = () => {
    const [chatData, setChatData] = useState<ChatData>({ chatHistory: [], messages: {} })
    const [selectedChatId, setSelectedChatId] = useState<string>('chat-1')
    const [isTyping, setIsTyping] = useState(false)
    const [toggleSidebar, setToggleSidebar] = useState(false)

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch('/data/chat-data.json')
                if (!response.ok) throw new Error('Failed to fetch chat data')
                const data = await response.json()
                setChatData(data)
            } catch (error) {
                console.error('Error fetching chat data:', error)
            }
        }
        fetchChatData()
    }, [])

    const handleSendMessage = (message: string) => {
        const newMessage = {
            id: `msg-${Date.now()}`,
            message,
            isUser: true,
            timestamp: new Date().toISOString()
        }

        setChatData(prev => ({
            ...prev,
            messages: {
                ...prev.messages,
                [selectedChatId]: [...(prev.messages[selectedChatId] || []), newMessage]
            }
        }))

        // Simulate AI response
        setIsTyping(true)
        setTimeout(() => {
            const aiResponse = {
                id: `msg-${Date.now() + 1}`,
                message: "I understand your question. Let me analyze your health data and provide you with relevant insights.",
                isUser: false,
                timestamp: new Date().toISOString()
            }

            setChatData(prev => ({
                ...prev,
                messages: {
                    ...prev.messages,
                    [selectedChatId]: [...(prev.messages[selectedChatId] || []), aiResponse]
                }
            }))
            setIsTyping(false)
        }, 2000)
    }

    const handleNewChat = () => {
        const newChatId = `chat-${Date.now()}`
        const newChat = {
            id: newChatId,
            title: 'New Chat',
            lastMessage: '',
            timestamp: new Date().toISOString()
        }

        setChatData(prev => ({
            ...prev,
            chatHistory: [newChat, ...prev.chatHistory],
            messages: {
                ...prev.messages,
                [newChatId]: []
            }
        }))

        setSelectedChatId(newChatId)
    }

    const currentMessages = chatData.messages[selectedChatId] || []

    return (
        <>
            <div className='flex items-center justify-between w-full'>
                <div className='w-full'>
                    <MainHeading
                        mainHeading='Chat Bot'
                        desc="Your health. Your data. Your life."
                    />
                </div>
                <div className='relative w-full flex justify-end'>
                    <button onClick={() => setToggleSidebar(true)} className=' flex md:hidden w-10  h-10 bg-[#F5F5F5] rounded-[80px] items-center justify-center' aria-label='chat history pannel'>
                        <EllipsisVertical size={24} color='#484A54' />
                    </button>
                    {toggleSidebar &&
                        <div className=' fixed inset-0 z-999 bg-white flex flex-col items-start w-full h-screen'>
                            <button onClick={() => setToggleSidebar(false)} className='flex items-center p-4 w-full justify-start gap-1.5'>
                                <ArrowLeft size={18} />
                                <span className='text-black text-sm font-medium'>Back</span>
                            </button>
                            <HistoryPannel
                                handleNewChat={handleNewChat}
                                chatData={chatData}
                                selectedChatId={selectedChatId}
                                setSelectedChatId={setSelectedChatId}
                                width='max-w-full'

                            />


                        </div>
                    }
                </div>

            </div>
            <div className='pt-6 flex items-start gap-6 w-full h-[calc(100vh-200px)] pb-12 lg:pb-0'>
                {/*  </aside> */}
                <div className='hidden md:flex h-full'>
                    <HistoryPannel
                        handleNewChat={handleNewChat}
                        chatData={chatData}
                        selectedChatId={selectedChatId}
                        setSelectedChatId={setSelectedChatId}

                    />
                </div>

                {/* Main Chat Area */}
                <div className='flex-1 flex flex-col h-full'>
                    {/* Chat Messages */}
                    <div className='flex-1 overflow-y-auto p-6'>
                        {currentMessages.length === 0 ? (
                            <div className='flex items-center justify-center h-full text-[#535862]'>
                                <p>Start a conversation...</p>
                            </div>
                        ) : (
                            <div className='space-y-3'>
                                {currentMessages.map((msg) => (
                                    <ChatMessage
                                        key={msg.id}
                                        message={msg.message}
                                        isUser={msg.isUser}
                                        timestamp={msg.timestamp}
                                    />
                                ))}
                                {isTyping && (
                                    <ChatMessage
                                        message=""
                                        isUser={false}
                                        isTyping={true}
                                    />
                                )}
                            </div>
                        )}
                    </div>

                    {/* Chat Input */}
                    <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
                </div>
            </div>
        </>
    )
}

export default ChatBotView