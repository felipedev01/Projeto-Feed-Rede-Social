import {Post} from './post'
import {Header} from './Componentes/Header.jsx'
import './Global.css'
import Styles from './App.module.css'
import {Sidebar} from './Componentes/Sidebar.jsx'

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
        author="João" 
        content="Outro post">

      </Post>

       </main>
     </div>
      
      
      
     
          
  
    
    </div>
    
  )

  
  
}


