import Header from '/src/components/Header.jsx'
import Entry from './components/Entry.jsx'
import toursites from './toursites.js'

export default function App() {

  const tours = toursites.map((tour)=>{
    return (
      <Entry 
        key={tour.id}           
        {...tour}
        />
    )
  })
  return (
    <>
      <Header />
      {tours}
      
    </>
    
  )
}

