import React from 'react';
import d1 from "../../Images/dvalley.png";
import d2 from "../../Images/dList.png";
import d3 from "../../Images/dAdd.png";
import d4 from "../../Images/dManage.png";
import d5 from "../../Images/manage.png";

const Dvalley = () => {
    return (
        <div>
      <div class="card w-full glass">
        <figure>
          <img className="h-96 mt-12 rounded-lg" src={d1} alt="car!" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-white text-5xl">D-Valley</h2>
          <div className='ml-2 text-white text-xl'>
                    <p>Features</p>
                    • User can manage products warehouse <br/>
                    • Firebase authentication activated for
                      secure login and register. <br/>
                    • User can increase and decrease product
                      quantity in manage inventory page.<br/>
                    • User can add new products and delete
                      stockout product. <br/>
                    • Admin can add and delete tool and can see
                    the user’s wish list.
                </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 mx-auto gap-2 mt-5">
            <button className="text-white">
              <a
                target="_blank"
                className="text-xl ml-2 btn btn-primary text-white"
                href="https://d-valley-2a581.web.app/"
              >
                D-Valley Live
              </a>
            </button>
            <button className="text-white">
              <a
                target="_blank"
                className="text-xl ml-2 btn  text-white"
                href="https://github.com/assraf-nur/D-valley-Client"
              >
                Client Side Link
              </a>
            </button>
            <button className="text-white">
              <a
                target="_blank"
                className="text-xl ml-2 btn text-white"
                href="https://github.com/assraf-nur/D-valley-Server"
              >
                Server Side Link
              </a>
            </button>
          </div>

          <div>
          <h1 className="text-center text-4xl text-white mt-5">Technology Used</h1>
            <div className='grid md:grid-cols-6 sm:grid-cols-1 gap-2 mt-5'>
                     <p className='rounded-lg bg-blue-500 text-white font-bold p-3 text-center'>React</p>
                    <p className='rounded-lg bg-yellow-500 text-white font-bold p-3 text-center'>JavaScript</p>
                    <p className='rounded-lg bg-yellow-500 text-white font-bold p-3 text-center'>Express.Js</p>
                    <p className='rounded-lg bg-green-600 text-white font-bold p-3 text-center'>Node.Js</p>
                    <p className='rounded-lg bg-green-500 text-white font-bold p-3 text-center'>MongoDB</p>
                    <p className='rounded-lg bg-yellow-600 text-white font-bold p-3 text-center'>Firebase</p>
            </div>
          </div>

          <div className="mt-12">
          <h1 className="text-center text-5xl text-white mb-5">Overview</h1>
            <figure>
              <img className="h-96 rounded-lg" src={d2} alt="car!" />
            </figure>
            <h1 className="text-center text-3xl text-white mt-5">Product List</h1>
            <p className="text-white mt-5 text-xl">User can update product from product list. After clicking the update button user will see a manage inventory page.</p>
          </div>

          <div className="mt-12">
          <figure>
              <img className="h-96 rounded-lg" src={d5} alt="car!" />
            </figure>
            <h1 className="text-center text-3xl text-white mt-5">Manage Inventory</h1>
            <p className="text-white mt-5 text-xl">In this section user can update product status. If user click on the delivery button the product quantity will decrease and if he add some product the quantity will increase. There is a another option called manage inventory.</p>
          </div>

          <div className="mt-12">
          <figure>
              <img className="h-96 rounded-lg" src={d3} alt="car!" />
            </figure>
            <h1 className="text-center text-3xl text-white mt-5">Add Product</h1>
            <p className="text-white mt-5 text-xl">In this section user can add product with supplier name, quantity, price, description, image URL and name.</p>
          </div>

          <div className="mt-12">
          <figure>
              <img className="h-96 rounded-lg" src={d4} alt="car!" />
            </figure>
            <h1 className="text-center text-3xl text-white mt-5">Manage Inventory</h1>
            <p className="text-white mt-5 text-xl">In this page user can delete particular product.</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Dvalley;