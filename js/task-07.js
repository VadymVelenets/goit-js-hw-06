const inputRangeRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");
const fontSizeControl = ({ currentTarget }) => (textRef.style.fontSize = `${currentTarget.value}px`);
inputRangeRef.addEventListener("input", fontSizeControl);
