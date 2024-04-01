
import "./Car.css";
const Car = (props) => {
  const { merk, harga, isNew, colors, beli, man } = props;
  return (
    // tag kosong di sebut pragment
    <div className="card">
      <img src={man} alt="Foto-mobil" width={300} />
      <h3>Merk Mobil : {merk}</h3>
      <h4>Harga Mobil : {harga} Miliyar</h4>
      {/* kalau Boolean maka harus pake ternery */}
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
      {/* kalau tipe datany array maka pake s 
        map untuk menambahkan spasi */}
      {/* <h5>Varian warna : {colors.map((color) => color + " ,")}</h5> */}
      <button onClick={beli}><a href="">Beli</a></button>
    </div>
  );
};

export default Car;
