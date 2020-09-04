import React from "react";
let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];
class TableRowNama extends React.Component {
  render() {
    return <td>{this.props.nama}</td>;
  }
}
class TableRowHarga extends React.Component {
  render() {
    return <td>{this.props.harga}</td>;
  }
}
class TableRowBerat extends React.Component {
  render() {
    return <td>{this.props.berat}</td>;
  }
}
class Tugas10 extends React.Component {
  render() {
    return (
      <>
        <div class="clear"></div>
        <center>
          <h1>Tabel Harga Buah</h1>
        </center>
        <table border="1px" width="400px">
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>

          {dataHargaBuah.map((el) => {
            return (
              <tr>
                <TableRowNama nama={el.nama} />
                <TableRowHarga harga={el.harga} />
                <TableRowBerat berat={el.berat} />
              </tr>
            );
          })}
        </table>
      </>
    );
  }
}
export default Tugas10;
