import React from 'react'

const Button = ({ label, href }: any) => {
    const handleClick = () => {
        window.location.href = href;
    };
    return (
            <button type="button" className="  main-button flex-center" onClick={handleClick}>
                {label}
            </button>
    )
}

export default Button