import React from "react";

function Button({log, text, disable}) {
    return (
        <button disabled={disable} type="button" onClick={() => console.log(log)} className="button">{text}</button>
    )
}
export default Button;


