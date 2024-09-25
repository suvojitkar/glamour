import{i as e}from"./_virtual___federation_fn_import-Ceydbr5R.js";import{u as d,j as t,n as i}from"./index--bbd0v0n.js";import"./GlamourCartLayout-DVX-daGS.js";const{useParams:p}=await e("react-router-dom"),{useEffect:u,useState:l}=await e("react"),f=()=>{const{id:r}=p(),{apiResp:s}=d({url:`https://dummyjson.com/products/${r}`}),[o,n]=l({});u(()=>{Object.keys(s)?.length&&n(s)},[s]);const c=()=>t.jsxs(x,{children:[t.jsx("img",{src:s.images[0],height:"500px",width:"500px"}),t.jsxs("div",{children:[t.jsxs("h1",{children:[" ",s.title," "]})," ",t.jsx("br",{}),t.jsxs(m,{children:[" ",s.description," "]})," ",t.jsx("br",{})]})]}),a=()=>"Loading ... ";return Object.keys(o)?.length?t.jsx(c,{}):t.jsx(a,{})},x=i.div`
    margin-top: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`,m=i.div`
    width: 550px;
`;export{f as default};
