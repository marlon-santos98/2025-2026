import axios from "axios";

export async function retornaUfs() {

  try{
    const endpoint = "https://www.devmedia.com.br/projetos-api/ufs";
    const listaUfs = (await axios.get(endpoint, {timeout: 10000})).data;

    return listaUfs;
  } catch(error){
    return{erro: "Erro ao acessar a API de UFs: " + error.message}
  }
}
