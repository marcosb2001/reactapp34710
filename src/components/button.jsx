


export default function Button({ text, type, onTouch}) {

    const btnStyle = {
        backgroundColor: type === "alert" ? "red" : "lime"
    }

    return (
        <button onClick={onTouch} style={btnStyle} className="btn">
            {text}
        </button>
    )
}