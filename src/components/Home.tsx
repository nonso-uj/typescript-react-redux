import AddTask from "./AddTask"
import Footer from "./Footer"
import Header from "./Header"
import Tasks from "./Tasks"

const Home = () => {
  return (
    <div className="container">
        <Header />
        <div>
            <h3>Home</h3>
        </div>
        <AddTask />
        <Tasks />
        <Footer />
    </div>
  )
}

export default Home