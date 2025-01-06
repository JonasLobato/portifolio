import { infoPoltronas } from "./dados.js"
const section = document.getElementById("assentos")
// let abaInfo = document.getElementById("abaInfo")
    
infoPoltronas.forEach(infoPoltrona => {
    let unidade = document.createElement("button")
    unidade.classList.add("assento", infoPoltrona.descricao);
    unidade.textContent = `Poltrona ${infoPoltrona.assento}`;
    unidade.addEventListener("click", abrir)
    section.appendChild(unidade)
    
    function abrir(){
        let abaInfo = document.createElement("dialog")
        abaInfo.classList.add("abaInfo")
        section.appendChild(abaInfo)
            
        let nP = document.createElement("p")
        nP.innerText = `Poltrona ${infoPoltrona.assento}`
        abaInfo.appendChild(nP)
            
        let dis = document.createElement("p")
        dis.classList.add(`aba${infoPoltrona.descricao}`)
        dis.innerText = infoPoltrona.descricao
        abaInfo.appendChild(dis)
            
        let preco = document.createElement("p")
        preco.innerText = `R$${infoPoltrona.preco}`
        abaInfo.appendChild(preco)
            
        let btComprar = document.createElement("button")
        btComprar.classList.add("btComprar")
        btComprar.innerText = `Comprar`
        abaInfo.appendChild(btComprar)
            
        let btFechar = document.createElement("button")
        btFechar.setAttribute("class","btFechar")
        btFechar.innerText = `Fechar`
        btFechar.addEventListener("click", ()=>{abaInfo.close()})
        abaInfo.appendChild(btFechar)
    
        abaInfo.showModal()
    }
})