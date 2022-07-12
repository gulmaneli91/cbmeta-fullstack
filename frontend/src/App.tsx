import Header from "./components/NotificationButton/Header"
import SalesCard from "./components/NotificationButton/SalesCard"

function App() {
 return (
  <>
  <Header/>
  <main>
    <section id="sales">
      <div className= "cb-vendas-container">
        <SalesCard/>
      </div>
    </section>
  </main>
  </>
  )
}

export default App
