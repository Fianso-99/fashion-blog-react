import './App.css'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'

// Import your images from the assets folder
import image1 from './assets/blog-image-1.jpg'
import image2 from './assets/blog-image-2.jpg'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
      <main>
        <Article 
          date="11/12/20"
          title="On the Street in Brooklyn"
          image={image1}
          alt="Street style in Brooklyn"
          content="Lorem ipsum dolor sit amet..."
        />

        <Article 
          date="11/11/20"
          title="Vintage Is The New Old"
          image={image2}
          alt="Vintage style models"
          content="Lorem ipsum dolor sit amet..."
        />
      </main>

      <Footer />
    </div>
  )
}

export default App