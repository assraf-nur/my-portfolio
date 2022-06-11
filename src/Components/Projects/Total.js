import React from "react";
import t1 from "../../Images/total.png";
import t2 from "../../Images/totalList.png";
import t3 from "../../Images/totalDash.png";
import t4 from "../../Images/totalWish.png";
import t5 from "../../Images/dPurchase.png";
import t6 from "../../Images/tPay.png";

const Total = () => {

  return (
    <div>
      <div class="card w-full glass">
        <figure>
          <img className="h-96 mt-12 rounded-lg" src={t1} alt="car!" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-white text-5xl">Total tools</h2>
          <div className="ml-2 text-white text-xl">
            <p>Features</p>
            • User can order their desired tools <br />
            • Firebase authentication activated for secure login and register.{" "}
            <br />
            • Use has the payment option, if the user not paid yet he can cancel
            the order. <br />
            • Admin can access the all-major options for supporting user. <br />
            • Admin can add and delete tool and can see the user’s wish list.
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 mx-auto gap-2 mt-5">
            <button className="text-white">
              <a
                target="_blank"
                className="text-xl ml-2 btn btn-primary text-white"
                href="https://total-tools-47ca6.web.app/"
              >
                Total-Tools Live
              </a>
            </button>
            <button className="text-white">
              <a
                target="_blank"
                className="text-xl ml-2 btn  text-white"
                href="https://github.com/assraf-nur/Total-tools-client"
              >
                Client Side Link
              </a>
            </button>
            <button className="text-white">
              <a
                target="_blank"
                className="text-xl ml-2 btn text-white"
                href="https://github.com/assraf-nur/Total-tools-server"
              >
                Server Side Link
              </a>
            </button>
          </div>

          <div>
          <h1 className="text-center text-4xl text-white mt-5">Technology Used</h1>
            <div className='grid md:grid-cols-7 sm:grid-cols-1 gap-2 mt-5'>
                     <p className='rounded-lg bg-blue-500 text-white font-bold p-3 text-center'>React</p>
                    <p className='rounded-lg bg-yellow-500 text-white font-bold p-3 text-center'>JavaScript</p>
                    <p className='rounded-lg bg-yellow-500 text-white font-bold p-3 text-center'>Express.Js</p>
                    <p className='rounded-lg bg-green-600 text-white font-bold p-3 text-center'>Node.Js</p>
                    <p className='rounded-lg bg-green-500 text-white font-bold p-3 text-center'>MongoDB</p>
                    <p className='rounded-lg bg-yellow-600 text-white font-bold p-3 text-center'>Firebase</p>
                    <p className='rounded-lg bg-yellow-600 text-white font-bold p-3 text-center'>Stripe</p>
            </div>
          </div>

          <div className="mt-12">
          <h1 className="text-center text-5xl text-white mb-5">Overview</h1>
            <figure>
              <img className="h-96 rounded-lg" src={t2} alt="car!" />
            </figure>
            <h1 className="text-center text-4xl text-white mt-5">Tool List</h1>
            <p className="text-white mt-5 text-xl">User can chose his desire product from tool list. After placing order, ordered product will add to dashboard in admin panel. Admin can see the order and can process the tools user ordered.</p>
          </div>

          <div className="mt-12">
            <figure>
              <img className="h-96 rounded-lg" src={t5} alt="car!" />
            </figure>
            <h1 className="text-center text-4xl text-white mt-5">Place Order</h1>
            <p className="text-white mt-5 text-xl">After clicking the purchase button user will see this page. Here user have to give his some necessary information and click purchase button. This will place this order in the dashboard.</p>
          </div>

          <div className="mt-12">
          <figure>
              <img className="h-96 rounded-lg" src={t3} alt="car!" />
            </figure>
            <h1 className="text-center text-4xl text-white mt-5">Dashboard</h1>
            <p className="text-white mt-5 text-xl">In Dashboard user will find three option. My order, My profile and All user. Admin can see all option in the dashboard. in the dashboard admin can add new product, manage tool list, and can access all order. Here user can pay his ordered tools.</p>
          </div>

          <div className="mt-12">
          <figure>
              <img className="h-96 rounded-lg" src={t6} alt="car!" />
            </figure>
            <h1 className="text-center text-4xl text-white mt-5">Payment</h1>
            <p className="text-white mt-5 text-xl">Here user can pay with Credit card. This option is implemented by stripe . So, everything is secure.</p>
          </div>

          <div className="mt-12">
          <figure>
              <img className="h-96 rounded-lg" src={t4} alt="car!" />
            </figure>
            <h1 className="text-center text-4xl text-white mt-5">Wish List</h1>
            <p className="text-white mt-5 text-xl">We have a exclusive option like wishlist. Here user can wish his desire tools. Admin can see the wish list and can add that product in future. In wish list user can add tools name, approximate price and details. This details will help admin to search that product in the tools warehouse.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
