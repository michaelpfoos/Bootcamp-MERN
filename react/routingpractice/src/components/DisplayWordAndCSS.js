import react from 'react';

const DisplayWordAndCSS = (props) => {
    const { word, fontColor, backgroundColor } = props;   
    // <a style={{"color": "red", "backgroundColor": "green"}}

    //<p style={`backgroundColor:${backgroundColor}, color:${fontColor}`}>The Word is {word}</p>
    return (
        <div>
            <p style={{"color": `${fontColor}`, "backgroundColor": `${backgroundColor}`}}>The Word is {word}</p>
        </div>
    );

}

export default DisplayWordAndCSS;