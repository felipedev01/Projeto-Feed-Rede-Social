import {Post} from './Componentes/post.jsx'
import {Header} from './Componentes/Header.jsx'
import './Global.css'
import Styles from './App.module.css'
import {Sidebar} from './Componentes/Sidebar.jsx'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const posts= [
  {
    id:1,
    author:{
            authorAvatar:"https://xesque.rocketseat.dev/users/avatar/profile-4706ed19-0060-42d0-9f2a-d5d61fdb9b6f-1635537196786.jpg",
            authorName:"Felipe Cristovão da Silva",
            authorRole:"Web Developer"
           },
    publishedAt:new Date('2022-06-20 07:00:00'),

    content:[{
      type:'paragraph',
      content:'Olá Pessoal! 👋',
    },
    {
      type:'paragraph',
      content:'Este é o meu primeiro projeto feito com React.js, ele é simples mas aprendi muita coisa ao fazê-lo, é uma reprodução de um feed de uma rede social, onde implementei algumas funcionalidades como comentar postagens e curtir comentários.',

    },
    {
      type:'paragraph',
      content:'Habilidades Testadas:',
    },
    
    {
      
      type:'paragraph',
      content:"✅ Iniciar um projeto com Vite"
    
  },
  {
      
    type:'paragraph',
    content:"✅ Utilizar flexbox, grid e unidades de medida relativa para responsividade"
  
},
{
      
  type:'paragraph',
  content:"✅ Criar e organizar os componentes seguindo boas práticas"

},
{
      
  type:'paragraph',
  content:"✅ Fazer a comunicação entre componentes utilizando o conceito de propriedades"

},
{
      
  type:'paragraph',
  content:"✅ Utilizar estados para criar e listar elementos da aplicação"

},
{
      
  type:'paragraph',
  content:"✅ Controle de versão com Git e Github"

},
    {
      type:'link',
      content:"👉 https://github.com/felipedev01",
    },
    {
      type:'link',
      content:'#novoprojeto #nlw #rocketseat'
    }
    

  ]

  
  },
  {
    id:2,
    author:{
            authorAvatar:"https://xesque.rocketseat.dev/users/avatar/profile-4706ed19-0060-42d0-9f2a-d5d61fdb9b6f-1635537196786.jpg",
            authorName:"Felipe Cristovão da Silva",
            authorRole:"Web Developer"
           },
    publishedAt:new Date('2022-01-20 07:00:00'),

    content:[{
      type:'paragraph',
      content:'Olá Pessoal! 👋',
    },
    {
      type:'paragraph',
      content:'Este é o meu primeiro projeto feito com React.js, ele é simples mas aprendi muita coisa ao fazê-lo, é uma reprodução de um feed de uma rede social, onde implementei algumas funcionalidades como comentar postagens e curtir comentários.',

    },
    {
      type:'paragraph',
      content:'Habilidades Testadas:',
    },
    
    {
      
      type:'paragraph',
      content:"✅ Iniciar um projeto com Vite"
    
  },
  {
      
    type:'paragraph',
    content:"✅ Utilizar flexbox, grid e unidades de medida relativa para responsividade"
  
},
{
      
  type:'paragraph',
  content:"✅ Criar e organizar os componentes seguindo boas práticas"

},
{
      
  type:'paragraph',
  content:"✅ Fazer a comunicação entre componentes utilizando o conceito de propriedades"

},
{
      
  type:'paragraph',
  content:"✅ Utilizar estados para criar e listar elementos da aplicação"

},
{
      
  type:'paragraph',
  content:"✅ Controle de versão com Git e Github"

},
    {
      type:'link',
      content:"👉 https://github.com/felipedev01",
    },
    {
      type:'link',
      content:'#novoprojeto #nlw #rocketseat'
    }
    

  ]
  
  }
]

function welcome(){

  setTimeout(() => {
    toast.info('Disponível apenas funcionalidades de criar comentário, apagar comentário, e também aplaudir',{
      autoClose:10000,
  })
  }, 4700);
  setTimeout(() => {
    toast('😀 Seja bem vindo! Obrigado por testar. ',{
      autoClose:2000,
  
  })

}, 1000);
  
  
}

welcome()

  

export function App() {

 

  return(

    <div>


      <Header></Header>

     <div className={Styles.Wrapper}>
     <Sidebar></Sidebar>
       <main>
       
       {posts.map(post =>{
        return(
             <Post 
             key={post.id}
             author={post.author}
             content={post.content}
             publishedAt={post.publishedAt}
             >

             </Post>
        )
       })
      
      }

       </main>
       <ToastContainer></ToastContainer>

     </div>
      
      
      
     
          
  
    
    </div>
    
  )

  
  
}


