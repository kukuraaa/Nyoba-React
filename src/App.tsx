import "./App.css";
import foto from "./assets/ra.jpeg";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <a href="#profil">Profil</a>
        <a href="#motivasi">Motivasi</a>
        <a href="#footer">Footer</a>
      </nav>

      <div className="profil" id="profil">
        <div className="foto">
          <img src={foto} alt="Foto" />
        </div>

       <div className="biodata">
        <p>Nama : Khumaera</p>
        <p>Sekolah : SMKN 2 Sukabumi</p>
        <p>Jurusan : RPL</p>
      </div>
      </div>

      <div className="motivasi" id="motivasi">
        <h2>Motivasi Ingin Menjadi Frontend Developer</h2>

        <p>
          Saya ingin menjadi Frontend Developer karena saya tertarik membuat
          tampilan website yang menarik, dan juga ingin belajar lebih dalam
          lagi di bidang Frontend Development.
        </p>
      </div>

      <footer id="footer">
        <p className="copyright">
          © 2026 Homieraa
        </p>
      </footer>

    </div>
  );
}

export default App;