
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/coffeeCard';
import { useState } from 'react';

function Home() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)




  return (
    <>



      <div className='m-20 '>
        <h1 className='text-5xl text-center text-purple-600'>Hot and Cold Coffee:{coffees.length}</h1>
        <div className='grid md:grid-cols-2 gap-4 my-20'>
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>

      </div>
    </>
  )
}

export default Home
