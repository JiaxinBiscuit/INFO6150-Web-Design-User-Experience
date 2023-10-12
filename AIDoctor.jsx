import './AIDoctor.css';
import { useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");

function AIDoctor(){
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const prompt = input.trim().toString();
        if (prompt === "") {
            setLoading(false);
            return;
        }

        const configuration = new Configuration({
            apiKey:"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"
        });
        const openai = new OpenAIApi(configuration);

        try {
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: prompt }],
            });
            setResponse(completion.data.choices[0].message.content);
        } catch (error) {
            setResponse("Oops! Something went wrong. Please try again later.");
        }finally {
            setLoading(false);
        }
    };

    return(
        <div className="ai__doctor">
        <img className="ai__img" alt="a hand with plants" src={`./img/doctor.jpg`}></img>
        <h1>AI Plant Doctor</h1>
        <span>Our AI powered Plant Doctor can answer any of your plant related queries.</span>
        <span>Try something like - How many time should I water Calathea Rattlesnake in a week?</span> 
        <form className="ai__form" onSubmit={handleSubmit}>
            <label htmlFor="question"> Enter your question in the box below: </label> 
            <input type="text" id="question" value={input} onChange={event => setInput(event.target.value)} />
            <button className="ai__button" type="submit">Answer</button>
        </form>
        <div> 
            {loading ? <span>Loading...</span> : <div className="ai__response">{response}</div>} 
        </div>
        <span className="openAI">This conversation is powered by OpenAI</span>
      </div>
    );
}

export default AIDoctor;