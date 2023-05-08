import React from 'react'
import emojipedia from './components/emojipedia'
import Entry from './components/Entry';

const setEmoji=(singleEmoji)=>{
  return(
    <Entry
      key={singleEmoji.id}
      emoji={singleEmoji.emoji}
      name={singleEmoji.name}
      meaning={singleEmoji.meaning}
    />
  )
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        
        {emojipedia.map(setEmoji)}
      </dl>
     
    </div>

  );
}

export default App;
