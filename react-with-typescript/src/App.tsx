import './App.css'
import { Card } from './components/Card'
import { Layout } from './components/Layout'

function App() {
  return (
    <>
      <Layout >
        <Card id={1} title="Massa" description="Top demais bicho"/>
        <Card id={2} title="Card do Dennis Lindo" description="Oloko bicho"/>
      </Layout>
    </>
  )
}

export default App
