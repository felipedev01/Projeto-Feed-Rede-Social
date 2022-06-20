import {Post} from './Componentes/post.jsx'
import {Header} from './Componentes/Header.jsx'
import './Global.css'
import Styles from './App.module.css'
import {Sidebar} from './Componentes/Sidebar.jsx'

const posts= [
  {
    id:1,
    author:{
            authorAvatar:"https://github.com/diego3g.png",
            authorName:"Felipe Cristovão da Silva",
            authorRole:"Web Developer"
           },
    publishedAt:new Date('2022-06-20 07:00:00'),

    content:[{
      type:'paragraph',
      content:'Fala galeraa 👋',
    },
    {
      type:'paragraph',
      content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',

    },
    {
      type:'link',
      content:'👉 jane.design/doctorcare',
    },
    {
      type:'link',
      content:'#novoprojeto #nlw #rocketseat'
    }
    

  ]

  
  }
]


export function App() {

  return(

    <div>


      <Header></Header>

     <div className={Styles.Wrapper}>
     <Sidebar></Sidebar>
       <main>
       <Post 
        author="Felipe" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nemo dolor sed nostrum recusandae quod repudiandae hic maiores, ipsa commodi sit quia blanditiis totam pariatur excepturi cumque, alias mollitia quidem.">
       
      </Post>
      
      <Post 
        author="Felipe" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nemo dolor sed nostrum recusandae quod repudiandae hic maiores, ipsa commodi sit quia blanditiis totam pariatur excepturi cumque, alias mollitia quidem.">

       
      </Post>
      
     

       </main>
     </div>
      
      
      
     
          
  
    
    </div>
    
  )

  
  
}


