
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



function Main() {
    return (
      <main className="Main">
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
            <p>Order a delivery<img src={Cycling} alt="Bike Emoji"></img></p>
        </article>
        <article>
          <div class="box3">
          <img src={Bruschetta} alt="Bruschetta close up" width={272} height={171}></img>
        </div>
          <h3>Bruschetta</h3>
          <h3>$ 12.99</h3>
          <p>Our Bruschetta is made from grilled bread
             that has been smeared with garlic and seasoned
              with salt and olive oil. </p>
            <p>Order a delivery<img src={Cycling} alt="Bike Emoji"></img></p>
        </article>
        <article>
          <div class="box3">
          <img src={Lemondessert} alt="Lemon cake" width={272} height={171}></img>
        </div>
        <h3>Lemon Dessert</h3>
          <h3>$ 12.99</h3>
          <p>This comes sraight from grandma’s recipe book,
             every last ingredient has been sauced and is
              as authentic as can be imagined. </p>
            <p>Order a delivery</p>
            <img src={Cycling} alt="Bike Emoji"></img>
        </article>
          </section>
          <section class="box4">
            <div >
              <h1 class="testimonials">Testimonials</h1>
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
                <img src={Jenny} alt="woman smiling" width={59} height={68}></img>
                <h3>Jenny C.</h3>
                <p>“Little Lemon has the BEST bruschetta! LOVE IT!”</p>
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
                <p>“I have always had a good experience here. Service is quick and food is YUMMY!”</p>
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
          <section>
            <div class="">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
              Marco and Adrian are two best friends who grew up eating Marco’s grandmother’s
               Mediterranean cooking and went to culinary school together. Afterwards they
                circled back to their favorite flavors; Nana Maria’s.
                They came back to downtown Chicago and opened Little Lemon in 2014.
              </p>
            </div>
          </section>
          
      </main>
    );
  }

  export default Main;