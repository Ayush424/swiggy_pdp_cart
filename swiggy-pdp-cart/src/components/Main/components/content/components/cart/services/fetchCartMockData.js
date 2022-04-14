export async function fetchCartData(){
    const url="http://localhost:8080/cart"
    const data = await fetch(url).then(response=>response.json());
    return data
  }