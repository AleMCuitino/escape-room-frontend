import { createContext } from "react";



const AnswerContext = createContext();



const AnswerProvider = ({children, value }) =>{

    return(
      
        <AnswerContext.Provider value={value}> 
            {children}
        </AnswerContext.Provider>
    )
};


export { AnswerProvider };
export default AnswerContext;