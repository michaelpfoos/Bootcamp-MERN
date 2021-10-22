import react from 'react';



const DisplayNumberOrWord = (props) => {
    const { UrlInput } = props;  

    {
        console.log(isNaN(UrlInput));
        if (isNaN(UrlInput) === false) {  
            return <p>The Magic Number is {UrlInput}</p>                      
        }
        else {            
            return <p>The Magic word is {UrlInput}</p> 
        }
    }
}

export default DisplayNumberOrWord;