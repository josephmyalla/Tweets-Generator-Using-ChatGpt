import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import cadenaLogo from './assets/cadenaLogo.png';
import Logo from '../src/components/Logo'
import CustomInput from '../src/components/CustomInput'
import Button from "./components/Button";

//open ai config
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const apiClient = new OpenAIApi(configuration);

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [prompts,setPrompts]=useState([])
  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const clearInputText = ()=>{
     setPrompt("")
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const completions = await apiClient.createCompletion({
        model: "text-davinci-003",
        prompt: `Make a tweet about: ${prompt} and add emojis to make it more fun.`,
        max_tokens: 880,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      
      setResponse(completions.data.choices[0].text);
      setPrompts([...prompts,prompt])
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[100vh]">
      <div className="w-[240px] bg-gray-900 hidden md:block">
       <div className="p-8">
        <Button buttonTitle="New chat"
          buttonClick={clearInputText}
          buttonStyle={`text-white font-medium px-4 py-2 rounded-md border 
          border-gray-200 flex 
          justify-center items-center
          cursor-pointer
          `}
          />
       </div>

       <div className="p-4">
          {prompts.map((item,i)=>(
            <p key={i} className="text-center text-gray-300 m-2 cursor-pointer" onClick={()=>setPrompt(item)}>{item}</p>
          ))}
       </div>
      </div>
      <div className="flex-1 flex flex-col items-center px-4 sm:p-0">
      <div className="m-8"><h1 className="text-4xl text-center uppercase max-w-lg text-indigo-50 leading-snug">Generate some Cool tweets with chatgpt</h1></div>

      <Logo imageUrl={cadenaLogo} alt="Cadena Logo" logoStyle={`h-12 mb-5 mt-20`} />
      <form className="w-full max-w-2xl">
        <div className="flex flex-col space-y-2 md:flex-row items-center border-b-2 pb-4 border-indigo-600 py-2 space-x-2">
          <CustomInput
            placeholder="Enter a topic you want to tweet about."
            value={prompt}
            pattern
            onChange={handlePromptChange}
          />
          <Button
            buttonTitle="Generate"
            buttonStyle={`flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded cursor-pointer`}
            buttonClick={handleSubmit}
          />
        </div>
      </form>
      {response && (
        <div className="w-full max-w-lg mt-4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="text-gray-700 text-base">{response}</p>
          </div>
        </div>
      )}
    </div>
      </div>
      <div className="bg-gradient-to-b from-gray-900 to-gray-700 flex flex-col">
       <div className="flex flex-col-reverse md:flex-row space-y-4 justify-between m-8">
       <div className="flex space-x-2">
          <p className="text-gray-200 cursor-pointer">Terms</p> <span>|</span><p className="text-gray-200 cursor-pointer">Privacy</p>
       </div>
          <div className="max-w-lg">
            <p className="text-gray-400">
            Chat GPT Apri Version 2023. Free 
            Research Preview Our Goal is to 
            make AI Systems more natural and 
            Safe to interact with. 
            Your feedback will help us improve
            </p>
            <p className="mt-2 text-lg text-indigo-600">Rebuilt by Joseph Myalla</p>
            <p className="text-md text-indigo-400">chanangae@gmail.com</p>
            <p className="text-md text-indigo-400">+255715680744</p>
          </div>
       </div>
      </div>
    </div>
  );
};

export default App;
