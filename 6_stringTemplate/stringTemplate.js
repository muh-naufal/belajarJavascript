const name = "Muhammad Naufal Yafi' Winarto";
const template = `Nama = ${name}`;

let firstName = "Muhammad Naufal";
let middleName = "Yafi'";
let lastName = "Winarto";

const nilai = 97;
let fullTemplate = `Nama Lengkap = ${firstName} ${middleName} ${lastName}, Dinyatakan ${
  nilai > 90 ? "Lulus" : "Tidak Lulus"
}`;

const multiline = `
Saya Naufal,
Saya sedang belajar Javascript,
Saya suka sekali belajar Javascript.`;

document.writeln(multiline);

console.info(fullTemplate);
