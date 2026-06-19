/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cases } from './pages/Cases';
import { About } from './pages/About';

export default function App() {
  return (
    <div className="bg-white font-sans text-slate-800 antialiased selection:bg-sg-green-light selection:text-sg-blue-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
