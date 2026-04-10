import { BrowserRouter, Route, Routes } from "react-router"
import { Nav } from "./components/Nav/Nav"
import { LandingPage } from './pages/landingPage/landingPage'
import { StartPage } from "./pages/startPage/startPage"
import { Logo } from "./components/Logo/Logo"
import { BreathPage } from './pages/breathPage/breathPage'
import { MoodPage } from "./pages/moodPage/moodPage"
import { DiaryPage } from './pages/diaryPage/diaryPage'
import { SoundPage } from './pages/soundPage/soundpage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/startpage" element={<StartPage />} />
          <Route path="/breathpage" element={<BreathPage />} />
          <Route path="/moodpage" element={<MoodPage />} />
          <Route path="/diarypage" element={<DiaryPage />} />
          <Route path="/moodpage" element={<SoundPage />} />
          <Route path="/navbar" element={<Nav />} />
          <Route path="/logo" element={<Logo />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
