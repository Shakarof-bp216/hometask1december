import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainlayout from "./layout/mainlayout"
import Basketpage from "./pages/basketpage"
import Homepage from "./pages/homepage"
import Wishlistpage from "./pages/wishlistpage"
import Todolistpage from "./pages/todolistpage"
import BasketProvaider from "./context/BasketProvaider"
import WishlistProvaider from "./context/WishlistProvaider"

function App() {

  return (
    <>
      <WishlistProvaider>
        <BasketProvaider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Mainlayout />}>
                <Route index element={<Homepage />} />
                <Route path="/wishlistpage" element={<Wishlistpage />} />
                <Route path="todolistpage" element={<Todolistpage />} />
                <Route path="/basketpage" element={<Basketpage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BasketProvaider>
      </WishlistProvaider>
    </>
  )
}

export default App
