
import React,{useState} from 'react'
import Product from './Product';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Shirt() {
    const artiPerPage = 5;
    const arti = [
        {
          title : "Mens blue shirt",
          pi1: "p2.jpg",
          pi2: "p1.jpg",
          pi3: "p3.jpg",
          price: "20",
          no : 1
        },
        {
          title : "Mens blue shirt",
          pi1: "p2.jpg",
          pi2: "p1.jpg",
          pi3: "p3.jpg",
          price: "50",
          no : 2
        },
        {
          title : "Mens blue shirt",
          pi1: "p2.jpg",
          pi2: "p1.jpg",
          pi3: "p3.jpg",
          price: "50",
          no : 3
        },
        {
          title : "Mens blue shirt",
          pi1: "p2.jpg",
          pi2: "p1.jpg",
          pi3: "p3.jpg",
          price: "50",
          no : 4
        },
        {
          title : "Mens blue shirt",
          pi1: "p2.jpg",
          pi2: "p1.jpg",
          pi3: "p3.jpg",
          price: "50",
          no : 5
        },
        {
            title : "Mens blue shirt",
            pi1: "p2.jpg",
            pi2: "p1.jpg",
            pi3: "p3.jpg",
            price: "50",
            no : 6
          },
          {
            title : "Mens blue shirt",
            pi1: "p2.jpg",
            pi2: "p1.jpg",
            pi3: "p3.jpg",
            price: "50",
            no : 7
          },
          {
            title : "Mens blue shirt",
            pi1: "p2.jpg",
            pi2: "p1.jpg",
            pi3: "p3.jpg",
            price: "10",
            no : 8
          },
          {
            title : "Mens blue shirt",
            pi1: "p2.jpg",
            pi2: "p1.jpg",
            pi3: "p3.jpg",
            price: "5",
            no : 9
          }
      ]
      const [currentPage, setCurrentPage] = useState(1);

      const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    
      const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
      };
    
      const startIndex = (currentPage - 1) * artiPerPage;
      const endIndex = startIndex + artiPerPage;
      const displayedarti = arti.slice(startIndex, endIndex);
    
      const isPreviousDisabled = currentPage === 1;
      const isNextDisabled = endIndex >= arti.length;

  return (
    <div>
        <Navbar/>
      <h1>Best shirt collection </h1>
      <div className="container d-flex justify-content-between">
                <button className="bn632-hover bn21 btn btn-dark" onClick={handlePreviousPage} disabled={isPreviousDisabled}>&nbsp;&nbsp;&nbsp; Previous</button>
                <button className="bn632-hover bn21 btn btn-dark" onClick={handleNextPage} disabled={isNextDisabled}>Next &nbsp;&nbsp;&nbsp;</button>
              </div>
              <br />
      <div className="row">
              {displayedarti.map((element) => (
                <div className="col-md-4" key={element.no}>
                  <Product p1={element.pi1} p2={element.pi2} p3={element.pi3} title={element.title} price={element.price} no={element.no}/>
                </div>
              ))}
            </div>
            <Footer/>
    </div>
  )
}