import image from './bowling_balls.jpg';

function Header() {
  return (
    <div className="bg-dark">
      <div className="row">
        <h1 className="display-3 col-8 text-white">
          Welcome to the Bowling site of Washington
        </h1>
        {/* <div className="col">
          <img src={image} className="logo" />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
