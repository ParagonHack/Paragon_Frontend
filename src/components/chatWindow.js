import TypingAnimation from "../components/TypingAnimation";
import { useState, useEffect } from "react";
import { OpenAI } from "langchain/llms/openai";
import { ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate } from "langchain/prompts";
import { current } from "@reduxjs/toolkit";

import axios from 'axios';

import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Vast_Shadow } from "next/font/google";

const ChatWindow = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const oai_key = "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";

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }]);

    
    const promise_vdb_query = getVdbQuery(inputValue);
    const vdb_query = await getPromiseData(promise_vdb_query);

    const promise_ai_response = sendMessage(inputValue, vdb_query);
    const ai_response = await getPromiseData(promise_ai_response);
    
    const vdb_response = getVdbResults(vdb_query);

    // setIsLoading(true);

    setInputValue('');
  }

  const getPromiseData = async (p) => {
    try {
      const value = await p;
      return value
    } catch (err) {
      console.log(err);
    }

  }

  const getVdbQuery = async (message) =>{

    const model = new OpenAI({ openAIApiKey: oai_key, temperature: 0.9 });

    const last_x_messages = chatLog.slice(-10);
    
    const template = 
    `You are an assistant that will help in the process of generating a question to search for videos relative to the user's text, \
        that BEST DESCRIBES and SUMMARISES the chat history between an AI powered language model (LLM) and the user. \
        The question should be in a language format, such as if you were asking it to a human. \
        Following this information you will receive a transcript of the discussion. \
        One single message contains 3 components: {user text}, {generated query}, {AI response} \
        Do not use the information in the AI response history to generate the database query, as those are only suggestions, \
        base your query only based on the User Text and the past Generated Queries. \
        The scope is that you will generate a highly relevant query from the information the user provides, \
        as another model is used to generate new ideas to the user. Do not go off subject!! \
        The query to the database does not need to be long, yet it needs to be very descriptive of what the user asks. \
        Message history: ${JSON.stringify(last_x_messages)} \
        Current user text: ${message}`;
 
    const res = await model.call(template);

    return res
  }

  const createEmbeddings = async ({ token, model, input }) => {
    const embedder = new OpenAIEmbeddings({
      openAIApiKey: token, // In Node.js defaults to process.env.OPENAI_API_KEY
    });
    const res = await embedder.embedQuery(
      input
    );
    return res
  };


  const getVdbResults = async (db, vdb_query) => {
    const pinecone = new PineconeClient();

    await pinecone.init({
      environment: "eu-west1-gcp",
      apiKey: "16ce8894-a6b3-487d-916d-e1ce4a29e254",
    });
    const audio_index = pinecone.Index('audio-transcriptions');
    const video_index = pinecone.Index('video-transcriptions');

    const vector = await createEmbeddings({
      token: oai_key,
      model: 'text-embedding-ada-002',
      input: vdb_query,
    });

    console.log(vector[0]);

    const queryRequest = {
      "vector": vector,
      "topK": 2,
      "includeMetadata": true,
      "includeValues": true,
      "namespace": ""
    };

    const audio_queryResponse = await audio_index.query({queryRequest});
    // const video_queryResponse = await video_index.query({ queryRequest });

    console.log(audio_queryResponse);

  }


  const sendMessage = async (user_text, vdb_query) => {
    consol
    const model = new OpenAI({ openAIApiKey: oai_key, temperature: 0.9 });

    const last_x_messages = chatLog.slice(-10);

    const template = 
     `You are a chat-bot assistant that helps the user interact with an app that searches through a massive video database \
     The user requires to find specific information in the video database. Your purpose is ONLY to assist the user with what he needs, \
     suggest new ideas, and help the user navigate and expand on their ideas. You will ONLY help the user. \
     Another language model agent will pick up the discussion with the user and will generate the necessary database query to give the use the required information. \
     You will receive a chat history of the past conversation between you and the user, alongside the language model agent generated queries. \
     One single message contains 3 components: {user text}, {generated query}, {AI response} \
     Moreover you will receive the current user text and the database query generated for that text. This query respresents what the user can currently see in terms of bespoke videos from the video database. \
     Generate an appropriate output to make the user engage the platform further. \
      Message history: ${JSON.stringify(last_x_messages)} \
      Current user text: ${user_text} \
      Current query: ${vdb_query}`;


    const res = await model.call(template);

    setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: res }]);

    setIsLoading(false);

    return res
  }

  

  return (
      <div className="container ">
        <div className="flex flex-col h-screen rounded-3xl bg-gray-900">
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl">Conv_Title</h1>
          <div className="flex-grow p-6">
            <div className="flex flex-col space-y-4">
            {
          chatLog.map((message, index) => (
            <div key={index} className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}>
              <div className={`${
                message.type === 'user' ? 'bg-purple-500' : 'bg-gray-800'
              } rounded-lg p-4 text-white max-w-sm`}>
              {message.message}
              </div>
              </div>
          ))
              }
              {
                isLoading &&
                <div key={chatLog.length} className="flex justify-start">
                    <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                      <TypingAnimation />
                    </div>
                </div>
              }
        </div>
          </div>
            <form onSubmit={handleSubmit} className="flex-none p-6">
              <div className="flex rounded-lg border border-gray-700 bg-gray-800">  
            <input type="text" className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none" placeholder="Type your message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit" className="bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300">Send</button>
                </div>
            </form>
        </div>
      </div>
  )
}

export default ChatWindow
