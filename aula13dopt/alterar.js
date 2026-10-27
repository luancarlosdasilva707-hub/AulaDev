let ponto = 0;

function carrinho(id){
    let imagem = document.querySelector("#img" + id);
    let nome = document.querySelector("#p" + id);
    let precos = document.querySelector("#value" + id);

    let produto = {
        nome : nome.innerText,
        preco : precos.innerText,
        img : imagem.src
    };
    
    localStorage.setItem("produtoCarrinho", JSON.stringify(produto));
    window.location.href = "carrinho.html";
}

function clicou(){

    let h2 = document.querySelector("#h2");
    let img1 = document.querySelector("#img1");
    let p1 = document.querySelector ("#p1"); 
        let img2 = document.querySelector("#img2");
        let value1 = document.querySelector("#value1");
        let value2 = document.querySelector("#value2");
        let p2 = document.querySelector ("#p2");
        if (ponto % 2 == 0){
            h2.innerText = "Outros Podutos";
            h2.style.color = "red";
            img1.src = 'D_Q_NP_949817-MLA99476988818_112025-F.webp'
            p1.innerText = "Guitarra Elétrica Epiphone Les Paul Standard 50's Gold Top Destro";
            value1.innerText = "R$ 6,000"
            img2.src = 'geladeira.webp'   
            p2.innerText = "Geladeira Multidoor Im8s Inverter 590 Litros Inox  ";
            value2.innerText = "R$ 4,000"

        }

        else {
            h2.innerText = "Produtos";
            h2.style.color = "black";
            img1.src = 'ps5pro.webp'
            p1.innerText = "PS5 Pro"   
            img2.src = 'xboxS.webp'   
            p2.innerText = "Xbox Serie S";
            value1.innerText = "R$ 4,000"
            value2.innerText = "R$ 3,000"

            
        }
    ponto = ponto + 1;
    
}