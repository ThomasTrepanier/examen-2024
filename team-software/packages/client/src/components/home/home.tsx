import logo from '../../assets/logo.png';
import tree from '../../assets/tree.jpg';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Ceci est une description de la situation actuelle</p>
      <img src={logo} width="400px" height="400px" alt="logo" />
      <img src={tree} width="400px" height="400px" alt="tree" />
    </div>
  );
}
