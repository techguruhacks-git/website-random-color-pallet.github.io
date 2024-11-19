const content = document.querySelector(".content")
const  btn = document.querySelector(".generate");
const PaletteBoxs = 12;

const generatePalette = () =>{
    content.innerHTML = "";
    for (let i = 0; i < PaletteBoxs; i++){
        let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`;

        color.addEventListener("click", ()=> copyColor(color , randomHex));
        content.appendChild(color);
    }

    
}
generatePalette();

const copyColor = (elem, Hexval) =>{
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(Hexval).then(() =>{
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = Hexval, 1000);
    }).catch(() => alert("Failed to Copy Color code!"));
}
btn.addEventListener("click",generatePalette);


