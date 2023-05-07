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
{/* 
      <dl className="dictionary">
        
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emojipedia[1].emoji}
            </span>
            <span>{emojipedia[1].name}</span>
          </dt>
          <dd>
            {emojipedia[1].meaning}
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤣
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for „rolling on the floor, laughing“.
          </dd>
        </div>
      </dl> */}
      {emojipedia.map(setEmoji)}
    </div>

  );
}

export default App;
