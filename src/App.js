import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import produks from './db.json'



export default class App extends Component {
  state = {
    produks: produks,
    keranjang: JSON.parse(localStorage.getItem("toko")) || []

  }

  // componentDidMount() {
  //   console.log("update");
  //   // this.setState({ keranjang: JSON.parse(localStorage.getItem("toko")) })
  // }

  add = (x) => {
    const item = this.state.produks[x]
    const items = JSON.parse(localStorage.getItem("toko")) || []
    items.push(item)
    localStorage.setItem("toko", JSON.stringify(items))
    this.setState({ keranjang: JSON.parse(localStorage.getItem("toko")) })
  }

  remove = () => {
    this.setState({ keranjang: [] })
    localStorage.removeItem('toko')
  }

  render() {
    console.log("renderapp");

    return (
      <div>
        <Container>
          <Row>
            <Col>

              <h1>Produk</h1>
              <hr />
              <Produk add={this.add} produk={this.state.produks} remove={this.remove} />

            </Col>
            <Col>
              <h1>Keranjang</h1>
              <hr />
              {this.state.keranjang.map((item, i) => (
                <div key={i}>
                  <p>{item.nama}</p>
                  <p>{item.harga}</p>
                </div>
              ))}
              <button onClick={this.remove}>Reset</button>

            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}



export class Produk extends Component {

  render() {
    console.log("renderproduk");
    return (
      <div>
        {this.props.produk.map((item, i) => (
          <div key={i}>

            <p>{item.nama}</p>
            <p>{item.harga}</p>


            <button onClick={() => this.props.add(i)}>Tambah</button>


          </div>
        ))}

      </div>
    )
  }
}
