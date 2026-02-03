import "./App.css";
import Profile from "./Componets/profile";
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
import Todolist from "./Componets/TodoList";
import Castemer from "./Componets/Customer";

function App() {
  return (
    <>
      <Header />
      <Todolist />
      <Profile nama="Faris Affand" alamat="Bandung" umur={20} />
      <img
        src="https://picsum.photos/id/127/200/300"
        alt="gambar-pemandangan"
        width={100}
        height={100}
      />
      <Castemer />

      <Footer />
    </>
  );
}







export default App;