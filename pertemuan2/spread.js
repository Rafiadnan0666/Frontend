//spread syntax digunakan untuk memisahkan array atau object menjadi 1 item single value notasiny ... (titik tiga)

const fruits = ["apel","anggur"]

const newFruits = [...fruits,"Mangga","Lemon"]

console.log(newFruits);

const user = {
    name : "Budi Santoso",
    major : "Teknik Informatika",
}

const newUser = {
   ...user,
    age :20
}

console.log(newUser);