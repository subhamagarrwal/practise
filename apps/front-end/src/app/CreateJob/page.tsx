import Card from "@web/Components/Job_Create/Card"
import TopNav from "@web/Components/Job_Create/TopNav"


const CreateJob = () => {
  return (
        
          <main className='bg-[url("/background.svg")] bg-cover'>
            <div className='flex flex-col items-center justify-center'>
            <TopNav/>
            
            <Card/>
         
            
          </div>
          </main>
          
    
  )
}

export default CreateJob
