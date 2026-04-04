import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import FounderStory from './pages/FounderStory'
import FAQ from './pages/FAQ'
import BookSession from './pages/BookSession'
import Retreats from './pages/Retreats'
import SeattleRetreat from './pages/SeattleRetreat'
import FirstRetreat from './pages/FirstRetreat'
import Blog from './pages/Blog'
import BlogSoulSelam from './pages/BlogSoulSelam'
import BlogSummerRetreat from './pages/BlogSummerRetreat'
import Location from './pages/Location'
import Contact from './pages/Contact'
import Recruit from './pages/Recruit'
import Videos from './pages/Videos'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <main style={{ flex: 1, paddingTop: '64px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder-story" element={<FounderStory />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/book-a-session" element={<BookSession />} />
          <Route path="/retreats" element={<Retreats />} />
          <Route path="/retreats/seattle-retreat" element={<SeattleRetreat />} />
          <Route path="/retreats/event-one-akjs9" element={<FirstRetreat />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/soul-selam" element={<BlogSoulSelam />} />
          <Route path="/blog/summer-retreat-hnfbx" element={<BlogSummerRetreat />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos-1-2-1" element={<Navigate to="/videos" replace />} />
          <Route path="/videos-1-2-1/:category" element={<Videos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
