const ReviewsProductCard = (el) => {
  return (
    <div className="grid gap-5">
      <div className="bg-white p-5 grid gap-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="user">
              <div>
                <img
                  src="front-view-man-posing-with-sunglasses_23-2149415775 1.png"
                  alt="Avatar"
                  className="rounded-[50%]"
                />
              </div>
            </div>
            <div>
              <h5 className="text-[#1E1E1E] text-[1.5rem] font-bold">
                Bola Balogun
              </h5>
              <img src="threestar_rating.png" alt="Rating image" />
            </div>
          </div>
          <div>
            <p className="text-[#969696] ">12 hours ago</p>
          </div>
        </div>
        <p className="indent-10 text-[#383838] text-[1.25rem] font-medium">
          The pictures on the website look so beautiful. When it was delivered i
          honestly was not expecting much. Wow
        </p>
      </div>
      {/* Second */}
      <div className="bg-white p-5 grid gap-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="user">
              <div>
                <img
                  src="portrait-upset-american-black-person_23-2148749581 1.png"
                  alt="Avatar"
                  className="rounded-[50%]"
                />
              </div>
            </div>
            <div>
              <h5 className="text-[#1E1E1E] text-[1.5rem] font-bold">
                Jackson Jackson
              </h5>
              <img src="threestar_rating.png" alt="Rating image" />
            </div>
          </div>
          <div>
            <p className="text-[#969696] ">12 hours ago</p>
          </div>
        </div>
        <p className="indent-10 text-[#383838] text-[1.25rem] font-medium">
          I love this product so much
        </p>
      </div>
      <h6 className="text-center text-[#1D3B4A] font-semibold">More Reviews</h6>
    </div>
  );
};

export default ReviewsProductCard;
