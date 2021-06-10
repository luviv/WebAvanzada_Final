import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../components/navbar";
import Wheel from "../../assets/images/wheels/wheels.png";
import Right from "../../assets/icons/right.png";
import Left from "../../assets/icons/left.png";
import Config from "../../utils/info";
import Card from "../../components/card";
import Invoice from "../../components/invoice";
import ReactToPrint from "react-to-print";

import "./index.css";

const Shop = () => {
  const [allObjects, setAllObjects] = useState<any>(Config.categories);
  const [defaultImg, setDefaultImg] = useState<string>("");
  const [indexActual, setIndexActual] = useState<number>(0);
  const [actualObject, setActualObject] = useState<any>({});
  const [endShop, setEndShop] = useState(false);

  const [infoProduct, setInfoProduct] = useState<any>({
    wheels: { name: "", price: 0, image: "" },
    trucks: { name: "", price: 0, image: "" },
    tables: { name: "", price: 0, image: "" },
    sandpaper: { name: "", price: 0, image: "" },
  });
  const [total, setTotal] = useState<number>(0);

  const componentRef = useRef<any>();

  useEffect(() => {
    const chargeData = async () => {
      setDefaultImg(Config.categories[0]["default"]);
      setActualObject(allObjects[0]);
    };
    chargeData();
  }, []);

  const getNext = async () => {
    if (indexActual + 1 <= allObjects.length - 1) {
      setActualObject(allObjects[indexActual + 1]);
      setDefaultImg(allObjects[indexActual + 1]["default"]);
      setIndexActual(indexActual + 1);
    }
  };

  const printPage = () => {};

  const newTable = () => {
    setDefaultImg(allObjects[0]["default"]);
    setActualObject(allObjects[0]);
    setInfoProduct({
      wheels: { name: "", price: 0, image: "" },
      trucks: { name: "", price: 0, image: "" },
      tables: { name: "", price: 0, image: "" },
      sandpaper: { name: "", price: 0, image: "" },
    });
    setEndShop(false);
  };

  const getLast = async () => {
    //await setIndexActual(indexActual-1)
    if (indexActual - 1 >= 0) {
      setActualObject(allObjects[indexActual - 1]);
      setDefaultImg(allObjects[indexActual - 1]["default"]);
      setIndexActual(indexActual - 1);
    }
  };

  const changeShopping = (
    e: React.MouseEvent,
    name: string,
    type: string,
    price: number,
    defaultImage: string
  ) => {
    if(!endShop){
      infoProduct[type].name = name;
      infoProduct[type].price = price;
      infoProduct[type].image = defaultImage;
      console.log(infoProduct[type]);
      setInfoProduct({ ...infoProduct });
      setDefaultImg(defaultImage);
      changeTotal();
    }

  };

  const changeTotal = () => {
    const totalProducts =
      infoProduct["wheels"].price +
      infoProduct["trucks"].price +
      infoProduct["tables"].price +
      infoProduct["sandpaper"].price;
    setTotal(totalProducts);
  };

  const endShopTable = () => {
    setEndShop(!endShop);
  };

  return (
    <div>
      <NavBar />
      <div className="shop-container">
        <img onClick={getLast} src={Left} />
        {endShop ? (
          <div className="shop-invoice">
            Resumen
            <div className="shop-invoice-new" ref={componentRef}>
              <Invoice
                wheels={infoProduct["wheels"].image}
                truck={infoProduct["trucks"].image}
                table={infoProduct["tables"].image}
                sandpaper={infoProduct["sandpaper"].image}
              />
            </div>
          </div>
        ) : (
          <div className="shop-invoice">
            {actualObject.title}
            <img src={defaultImg} />
          </div>
        )}
        <img onClick={getNext} src={Right} />
      </div>
      <div className="shop-container-info">
        <div className="shop-product-price">
          <div className="shop-product-title">Cuenta</div>
          <div id="priceContent" className="shop-product-price-title">
            Ruedas:{" "}
            {infoProduct["wheels"].name + " $" + infoProduct["wheels"].price}
            <br />
            Truck:{" "}
            {infoProduct["trucks"].name + " $" + infoProduct["trucks"].price}
            <br />
            Tabla:{" "}
            {infoProduct["tables"].name + " $" + infoProduct["tables"].price}
            <br />
            Lija:{" "}
            {infoProduct["sandpaper"].name +
              " $" +
              infoProduct["sandpaper"].price}
            <br />
            <br />
            <br />
            <div className="shop-price">
              <div>Total:$ {total}</div>
              <br />

              {endShop ? (
                <div style={{ marginTop: -14 }}>
                  <ReactToPrint
                    trigger={() => (
                      <button onClick={printPage} className="button-shop-end">
                        Guardar Tabla
                      </button>
                    )}
                    content={() => componentRef.current}
                  />

                  <button onClick={newTable} className="button-shop-end-new">
                    Hacer Nueva Tabla
                  </button>
                </div>
              ) : (
                <button onClick={endShopTable} className="button-shop">
                  Terminar
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="shop-products">
          {actualObject["products"]
            ? actualObject["products"].map((product: any) => (
                <Card
                  img={product.image}
                  type={actualObject["name"]}
                  action={(e) =>
                    changeShopping(
                      e,
                      product.name,
                      actualObject["name"],
                      product.price,
                      product.image
                    )
                  }
                  name={product.name}
                  price={product.price}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Shop;
