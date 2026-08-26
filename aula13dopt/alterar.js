let ponto = 0;

function clicou(){

    

        let h2 = document.querySelector("#h2");
        let img1 = document.querySelector("#img1");
        let p1 = document.querySelector ("#p1") 
        let img2 = document.querySelector("#img2");
        h2.innerText = "Outros Destaques";
        h2.style.color = "red";
        let p2 = document.querySelector ("#p2");
        
        if (ponto % 2 == 0){
        img1.src = 'D_Q_NP_949817-MLA99476988818_112025-F.webp'
        p1.innerText = "Guitarra Elétrica Epiphone Les Paul Standard 50's Gold Top Destro"   
        img2.src = 'geladeira.webp'   
        p2.innerText = "Geladeira Multidoor Im8s Inverter 590 Litros Inox";

       
        }

        else {
    
            img1.src = 'ps5pro.webp'
            p1.innerText = "PS5 Pro"   
            img2.src = 'xboxS.webp'   
            p2.innerText = "Xbox Serie S";
            
        }
    ponto = ponto + 1;
    
}