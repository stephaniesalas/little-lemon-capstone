
import Restauranfood from "./Assets/restauranfood.jpg";
import Greeksal from "./Assets/greek salad.jpg";
import Cycling from "./Assets/Cycling.png";
import Bruschetta from "./Assets/mike-van-den-bos-F4qVqfkG2Aw-unsplash.jpg";
import Lemondessert from "./Assets/lemon dessert.jpg";
import Star1 from "./Assets/Star 1.png";
import Jenny from "./Assets/henrique-castilho-L8kMx3rzt7s-unsplash.jpg";
import Kacie from "./Assets/sonnie-hiles-gG70fyu3qsg-unsplash.jpg";
import Riley from "./Assets/christian-buehner-DItYlc26zVI-unsplash.jpg";
import Hayden from "./Assets/edward-cisneros-_H6wpor9mjs-unsplash.jpg";
import Starhalf from "./Assets/star 5 (half).png";
import Restaurantchef from "./Assets/restaurant chef B.jpg";
import Marioandadrian from "./Assets/Mario and Adrian A.jpg";



function Main() {
    return (
      <main className="Main">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="./Bookings.js" element={<Booking />}></Route>
        </Routes>
        <section>
          <div class="box">
          <img src={Restauranfood} width={376} height={446} alt="Dish of Bruschetta"></img>
            <h1>
              Little Lemon
            </h1>
            <h2>
              Chicago
            </h2>
            <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button type="button">Reserve a table</button>
          </div>
        </section>
        <section>
          <div class="box2">
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
          </div>
          </section>
          <section class="articles">
          <article>
          <div class="box3">
          <img src={Greeksal} width={272} height={171} alt="Greek Salad"></img>
        </div>
          <h3>Greek Salad</h3>
          <h3 id="price">$ 12.99</h3>
          <p>The famous greek salad of crispy lettuce, peppers,
           olives and our Chicago style feta cheese,
           garnished with crunchy garlic and rosemary croutons.</p>
            <p id="delivery">Order a delivery<img id="bike" src={Cycling} alt="Bike Emoji"></img></p>
        </article>
        <article>
          <div class="box3">
          <img src={Bruschetta} width={272} height={171} alt="Bruschetta"></img>
        </div>
          <h3>Bruschetta</h3>
          <h3 id="price">$ 12.99</h3>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
           Fresh locally grown tomatoes, basil completes this dish.</p>
            <p id="delivery">Order a delivery<img id="bike" src={Cycling} alt="Bike Emoji"></img></p>
        </article>
        <article>
          <div class="box3">
          <img src={Lemondessert} width={272} height={171} alt="Lemon Dessert"></img>
        </div>
          <h3>Lemon Dessert</h3>
          <h3 id="price">$ 12.99</h3>
          <p>This comes straight from grandma's recipe book. Sweet, warm, lemony, this fresh lemon cake will knock your socks off.
           Fresh whipped cream and lemon zest tops off this temptation.</p>
            <p id="delivery">Order a delivery<img id="bike" src={Cycling} alt="Bike Emoji"></img></p>
        </article>
        </section>
        <section class="box4">
            <div class="testimonials">
              <h1>Testimonials</h1>
            </div>
          <section>
            <article>
              <h3>Rating
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                </h3>
                <img src={Jenny} alt="woman smiling" width={59} height={60.9}></img>
                <h3>Jenny C.</h3>
                <p>"Little Lemon has the absolute BEST bruschetta! Fresh and crispy!"</p>
            </article>
            <article>
              <h3>Rating
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Starhalf} alt="half yellow star" width={16} height={16}></img>
                </h3>
                <img src={Kacie} alt="woman smiling" width={59} height={60.9}></img>
                <h3>Kacie M.</h3>
                <p>“I have always had a great time, quick service and food is YUMMY!”</p>
            </article>
            <article>
              <h3>Rating
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                </h3>
                <img src={Riley} alt="woman smiling" width={58} height={58.9}></img>
                <h3>Riley S.</h3>
                <p>“My favorite is the greek salad. Clean and classic. Never disappoints.”</p>
            </article>
            <article>
              <h3>Rating
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Star1} alt="yellow star" width={16} height={16}></img>
                <img src={Starhalf} alt="half yellow star" width={16} height={16}></img>
                </h3>
                <img src={Hayden} alt="woman smiling" width={59} height={60.9}></img>
                <h3>Hayden S.</h3>
                <p>“I come here every year for my birthday. Shout out to Jackie, my favorite server.”</p>
            </article>
          </section>
          </section>
          <section class="box6">
            <div class="about">
            <img id="twochefs" src={Marioandadrian} width={292} height={397} alt="Two Chefs talking"></img>
            <img id="smileychef" src={Restaurantchef} width={292} height={397} alt="Smiley Chef"></img>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
              Marco and Adrian are two best friends who grew up eating Marco’s grandmother’s
               Mediterranean cooking and went to culinary school together. Afterwards they
                circled back to their favorite flavors; Nana Maria’s.
                <br></br>
                <br></br>
                They came back to downtown Chicago and opened Little Lemon in 2014.
              </p>
            </div>
            </section>
      </main>
    );
  }

  export default Main;