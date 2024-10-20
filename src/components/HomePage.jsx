import { useContext, useState } from "react";
import { nurseryData, plantData } from "../mockData.js";
import NurseryListItem from "./NurseryListItem.jsx";
import ProductListItem from "./ProductListItem.jsx";
import { createPortal } from "react-dom";
import { ModalContext } from "../context.js";

import Modal from "./Modal.jsx";

export default function HomePage() {
  const [index, setIndex] = useState(10);
  const [plantDataList, setPlantDataList] = useState(plantData);
  const { isOpen } = useContext(ModalContext);

  const handleClick = () => {
    setIndex((prevIndex) => prevIndex + 10);
  };
  const handleChange = (e) => {
    const sortedData = [...plantDataList];

    e.target.value === "ORDER"
      ? sortedData.sort((a, b) => a.id - b.id)
      : sortedData.sort((a, b) => a.commonName.localeCompare(b.commonName));

    setPlantDataList(sortedData);
  };

  return (
    <main>
      <section className="section-1">
        <button className="btn green-btn">Plants</button>
        <button className="btn grey-btn">Pots</button>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
      </section>
      <section className="section-2">
        <h1>Nursery</h1>
        <ul>
          {nurseryData.map((item) => (
            <NurseryListItem details={item} key={item.id} />
          ))}
        </ul>
      </section>
      <section className="section-3">
        <div className="filter-container">
          <ul>
            <li>
              <p>Filter</p>
              <p>CLEAR ALL</p>
            </li>
            <li>
              <p>Type Of Plant</p>
              <button>+</button>
            </li>
            <li>
              <p>Price</p>
              <button>+</button>
            </li>
            <li>
              <p>Nursery</p>
              <button>+</button>
            </li>

            <li>
              <p>Ideal Plants Location</p>
              <button>+</button>
            </li>
            <li>
              <p>Indoor/ Outdoor</p>
              <button>+</button>
            </li>
            <li>
              <p>Maintenance</p>
              <button>+</button>
            </li>
            <li>
              <p>Plant Size</p>
              <button>+</button>
            </li>
            <li>
              <p>Water Schedule</p>
              <button>+</button>
            </li>
            <li>
              <p>Color</p>
              <button>+</button>
            </li>
            <li>
              <p>Seasonal</p>
              <button>+</button>
            </li>
            <li>
              <p>Light Efficient</p>
              <button>+</button>
            </li>
          </ul>
        </div>
        <div>
          <div className="sorting-container">
            <p>30 Products</p>
            <select className="select-container" onChange={handleChange}>
              <option value="ORDER">Order</option>
              <option value="ALPHABET">Alphabetical</option>
            </select>
          </div>
          <div className="products-container">
            {plantDataList.slice(0, index).map((plant) => (
              <ProductListItem details={plant} key={plant.id} />
            ))}
          </div>
          {index !== 30 && (
            <div className="view-more-btn-container">
              <button
                onClick={handleClick}
                type="button"
                className="view-more-btn"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>
      {isOpen && createPortal(<Modal />, document.body)}
    </main>
  );
}
