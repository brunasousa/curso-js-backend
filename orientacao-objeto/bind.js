const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

   // Personagem genérico recebe a função apresentar, portanto ela removida do contexto do objeto
   const personagemGenerico = personagem.apresentar
    console.log(personagemGenerico())
    //a personagem é undefined
   
    const personagemDefinido = personagemGenerico.bind(personagem)
   console.log(personagemDefinido())
   //a personagem é Princesa Leia