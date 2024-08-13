import { useState,useEffect } from "react";
import axios from 'axios';
import './shopping_cart.css';
import apple from'./apple.jpg';
import orange from'./orange.png';
import peache from'./peaches.png';
import pineapple from'./pineapple.png';
const App=()=>{
    let pic =[apple,orange,peache,pineapple];
    const [stocks,setStocks]=useState([
        {
            Product:'Apple',InStocks:5,Price:10
        },
        {
            Product:'Orange',InStocks:5,Price:20
        },
        {
            Product:'peaches',InStocks:5,Price:40
        },
        {
            Product:'PineApple',InStocks:5,Price:20
        }
    ]);  
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const[show,setShow]=useState(true);
    const handle =async(e)=>{
      e.preventDefault();
      axios.post("http://localhost:4000/login",{name,password})
        .then(response=>{
            console.log(response.data);
            setShow(response.data.show);
            alert(response.data.msg)

        })
    }
    const[cart,setCart]=useState([]);
    const[totalamount,setTotalAmount]=useState(0);
    //Function for add cart  ,remove stocks,Total cart  product
    const removeStock = ({item}) => {
        //Remove from stocks
        const newStocks = [...stocks];
        console.log(item);
        const index=newStocks.findIndex((el)=>el.Product==item.Product);
        console.log(index);
        if(newStocks[index].InStocks==0){
            alert("Out of Stock");
        }else{
           newStocks[index].InStocks-=1;          
           console.log(newStocks);
           setStocks(newStocks);
        }
        //Add to cart
        let cartIndex=cart.findIndex((ele)=>ele.Product==item.Product);
        console.log(cartIndex);
        console.log("Before if loop",cart);
        if(cartIndex==-1){
            cart.push({...item,InStocks:1});
            
        }else{
            cart[cartIndex].InStocks+=1;            
        }
        console.log("After loop",cart);
        setCart(cart);
        //Total the cart product price
        let total = 0;
        cart.forEach(item => {
            total += item.Price * item.InStocks;
        });
        setTotalAmount(total);
        }
    return(
        <>
        <div>
            {show ?
             <form id="body">
             <div>
                 <label className="name" id="name1">Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <input type="text" className="name" id="Name" value={name} onChange={(e)=>setName(e.target.value)} />

             </div>
             <div>
                 <label className="password" id="password">Password: </label>
                 <input type="password" className="password" id="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

             </div>
             <div>
                 <button onClick = {handle} className="submit">Submit</button>
             </div>
             <p id="msg"></p>
             <div>
                 {show}
             </div>
         </form>:

         <>
         <h1 className="h1">Stocks</h1>
        {stocks.map((item,i)=>(
            <div> 
            <ul>
                 <input type='image' src={pic[i%4]} id="img"/>
                 <button id="stock"className="stock"   onClick={()=>removeStock({item})} >{item.Product}:{item.InStocks}:{item.Price}</button>
            </ul>
           </div>
        ))}
        <h1 className="h1">Shopping Cart</h1>
        {cart.map((item,i)=>(
            <ul className="ul">
                <li className="stocks">
                   {item.Product} Quantity is {item.InStocks} and cost  ${item.Price}
                </li>
            </ul>
        ))}
        <h1 className="h1">Total Cost</h1>
        <p id="Stock"> Pay: ${totalamount}</p>
        </>
        }
        </div>        
        </>

    );
}

export default App;