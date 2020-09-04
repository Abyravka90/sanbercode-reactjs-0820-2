import React from "react";
class Tugas9 extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <header class="content">
            <div class="border">
              <h2>Form Pembelian Buah</h2>
              <form>
                <div class="justify">
                  Nama Pelanggan : &nbsp;
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Daftar Item : &nbsp;
                </div>
                <div class="justify">
                  <input type="text" />
                  <br />
                  <input type="radio" />
                  Semangka
                  <br />
                  <input type="radio" />
                  Jeruk
                  <br />
                  <input type="radio" />
                  Nanas
                  <br />
                  <input type="radio" />
                  Salak
                  <br />
                  <input type="radio" />
                  Anggur
                  <br />
                </div>
              </form>
              <div class="clear"></div>
              <div class="justify">
                <input type="submit" class="mintul" value="kirim"></input>
              </div>
            </div>
          </header>
        </div>
      </>
    );
  }
}
export default Tugas9;
