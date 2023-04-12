// Section to write code
// Deny copy & paste

import React, { useRef } from 'react';

function CodeEditor() {
  const textareaRef = useRef(null);
  // const handleClick = () => {
  //   const textareaValue = textareaRef.current.value;
  //   // do something with the textarea value
  // }
  return (
    <div>
      <div className="absolute top-[90px]">
        CodeEditor
      </div>
      <div>
        <textarea ref={textareaRef} className="bg-slate-200 h-[450px] w-[650px] border border-black resize-none px-3 py-2 font-mono" rows={4} cols={50} />
        {/* <button onClick={handleClick}>Submit</button> */}
      </div>
    </div>
  )
}

export default CodeEditor