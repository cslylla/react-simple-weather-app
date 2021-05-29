import React from "react";
import "./Quote.css"

export default function Quote(){
    let quotes = [
    "Be kind to your mind.",
    "We can’t always change what’s happening around us, but we can change what happens within us.",
    "Life is short. We can live it lost in thought or we can choose to be present as life unfolds around us.",
    "Now is a great time to be present. Now is good, too. And now.",
    "No matter how fast life is moving around us, there is always a place of stillness inside.",
    "Meditation and life are not separate. Meditation simply helps us to see and understand life more clearly.",
    "Meditation is less about knowing what to do and more about knowing what not to do.",
    "The mind is our most precious resource, through which we experience every single moment of life. Are you looking after yours?",
    "There is no room for anger when the mind is calm.",
    "Brilliant things happen in calm minds. Be calm. You are brilliant.",
    "No matter how much you might want the mind to be free from thoughts, resisting them only creates tension.",
    ];

    let randomNumber = Math.round(Math.random()*10);
    
    return (
    <div className="Quote">
    {quotes[randomNumber]}
    </div>
    )
}