import React from 'react';
import m1 from "../../Images/clicks.png";
import m2 from "../../Images/mService.png";
import m3 from "../../Images/mLogin.png";
import m4 from "../../Images/mRegistration.png";

const Mohsin = () => {
    return (
        <div>
      <div class="card w-full glass">
        <figure>
          <img className="h-96 mt-12 rounded-lg" src={m1} alt="car!" />
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
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto mt-5">
            <button className="text-white">
              <a
                target="_blank"
                className="text-xl ml-2 btn btn-primary text-white"
                href="https://mohsin-click.web.app/"
              >
                Mohsin Clicks Live
              </a>
            </button>
            <button className="text-white">
              <a
                target="_blank"
                className="text-xl ml-2 btn  text-white"
                href="https://github.com/assraf-nur/Mohsin-clicks"
              >
                Client Side Link
              </a>
            </button>
          </div>

          <div>
          <h1 className="text-center text-4xl text-white mt-5">Technology Used</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-2 mt-5'>
                     <p className='border rounded-lg bg-blue-500 text-white font-bold p-3 text-center'>React</p>
                    <p className='border rounded-lg bg-yellow-500 text-white font-bold p-3 text-center'>JavaScript</p>
                    <p className='border rounded-lg bg-yellow-600 text-white font-bold p-3 text-center'>Firebase</p>
            </div>
          </div>

          <div className="mt-12">
          <h1 className="text-center text-5xl text-white mb-5">Overview</h1>
            <figure>
              <img className="h-96 rounded-lg" src={m2} alt="car!" />
            </figure>
            <h1 className="text-center text-3xl text-white mt-5">Service List</h1>
            <p className="text-white mt-5 text-xl">User can see Services from this page. After clicking the checkout button user will see a checkout and info page.</p>
          </div>

          <div className="mt-12">
          <figure>
              <img className="h-96 rounded-lg" src={m3} alt="car!" />
            </figure>
            <h1 className="text-center text-3xl text-white mt-5">Login Page</h1>
            <p className="text-white mt-5 text-xl">Without Login user can not see the checkout page. So login is mandatory. Login is created by google firebase login authentication. So everything will be secure.</p>
          </div>

          <div className="mt-12">
          <figure>
              <img className="h-96 rounded-lg" src={m4} alt="car!" />
            </figure>
            <h1 className="text-center text-3xl text-white mt-5">Registration Page</h1>
            <p className="text-white mt-5 text-xl">If any user did not register yet, before login he have to register. After register he can see the checkout page. This page is also created with google firebase authentication.</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Mohsin;