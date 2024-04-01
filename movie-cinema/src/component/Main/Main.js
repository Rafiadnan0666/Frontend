import User from "../User/User.js";
import {} from "./Main.css";
import Car from "./../Car/Car.js";
import Movies from "../Movies/Movies.js";
import Hero from "../Hero/Hero.js";

const Main = () => {
  const datas = [
    {
      nama: "Nabil",
      member: "Gold",
      message: "Hello World",
    },
    {
      nama: "Ari",
      member: "Platinum",
      message: "Semangat Ya",
    },
    {
      nama: "Salsa",
      member: "Silver",
      message: "Bismillah",
    },
    {
      nama: "Soleh",
      member: "Gold",
      message: "Hello World",
    },
    {
      nama: "Nanda",
      member: "Silver",
      message: "Hello World",
    },
    {
      nama: "Agus",
      member: "Platinum",
      message: "Hello World",
    },
    {
      nama: "Sultan",
      member: "Platinum",
      message: "Hello World",
    },
    {
      nama: "Amii",
      member: "Gold",
      message: "Hello World",
    },
    {
      nama: "Mila",
      member: "Silver",
      message: "Hello World",
    },
  ];
  return (
    <div className="content">
      {/* <User nama="Rafi" member="Gold"/>
              <User nama="Nabil" member="Gold"/>
              <User nama="Kakang" member="Silver"/>
              <User nama="Adi" member="Platinum"/>
              <User nama="Budi" member="Silver"/>
              <User nama="Angga" member="Platinum"/>
              <User nama="Rina" member="Platinum"/>
              <User nama="Aulia" member="Gold"/>
              <User nama="Rara" member="Silver"/>
              <User nama="Fahmi" member="Gold"/> */}
      {/* <Car man={alphard} merk="Alphard" harga="3" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={lmgn} merk="Lamborghini" harga="4" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={fr} merk="Ferrari" harga="5" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={pjr} merk="Pajero Sport" harga="1" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={kns} merk="Koenigsegg" harga="2" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={psc} merk="Porsche" harga="4" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={bgt} merk="Bugatti" harga="5" isNew={true} beli={()=>alert("Pembelian Berhasil")}/>
              <Car man={ftr} merk="Fortuner" harga="1" isNew={true} beli={()=>alert("Pembelian Berhasil")}/> */}
      <Hero />
      <Movies />
      {datas.map((data) => (
        <User
          nama={data.nama}
          member={data.member}
          message={() => alert(data.message)}
        />
      ))}
      
    </div>
  );
};

export default Main;
