import "../summary/summary.css";

const posterSrc = [
  "https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/20c223c1-36b0-4855-9e9e-cfe9f6a233cf.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241220%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241220T005357Z&X-Goog-Expires=86399&X-Goog-Signature=8564edfad42474de848756a690b668fcf44b0116896c9cf083b85a34ee9a42fc76dbc18264bc598a522d681463b71412ca4e5839b425c89816131f23560abbf94e68a858c1d090577047fc85b5bd74c5be6c34dd6b26e303127e20c49e00ce6f39973a9d5568d1e7ad27043a791f2a601ef9ed5cc3bb4476bd5667159762303af24ea630c51db36e68e39accd2c1819ad17599043658e7dffe349cdaa9017d3f691424889e7cf7fbfa458706feda6d02d5b507feaba64052ce727a7b78cec12d87c0552cbd2500898a55805ae4cf3d41b0d693125e53cafecd3e22633d0aa3c8ca694eeca076468ddf830759f359707b9e76d1403b2c442c529dbc0ad6897b21&X-Goog-SignedHeaders=host",
  "https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/474c14c2-118d-4cb5-9812-270c320a5cf4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241220%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241220T005357Z&X-Goog-Expires=86399&X-Goog-Signature=30edaee9459c89c0c029ad74436c1e7d2ab275dc29338e961c1bb566553dad9a16121746eb59ac00b558dc74b88c09688ea7f067025ca83541e923a8262b6ee5384e2e85e8a46e7f3a756cd2c3c87f8487dba2a64c772e8b7ee71f7b5c3b7200cfd8c062ac0bddafe1a3ec202996f4c033d7b0b0d7d333853cab73b2a7913a765de9e2f56fcbf27d02902d8402079ed834b5191efc7154302f4e8c0a63ec2103071b5690f6cdee081c67663548f4120ba10ec30047faa8c7ce4b86a0dd3bcd4d881f2c5a6dc99b6303106cece829197dbdc5ce810262889ff4e3e615cab06e8d73494290fc5ea5ee785dc74dd537ef7b4d5852164366e59607fa25625038dc71&X-Goog-SignedHeaders=host",
  "https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/efc9e90c-0421-405e-af8c-9404fe68cb68.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241220%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241220T005357Z&X-Goog-Expires=86399&X-Goog-Signature=669ab80499641a17257a839392cc9181e4311743e037953f18cd51900560d2bcf94a3072bcb487152e39200e197fd7b6877cad6331874ac4ca69e7e62a7391ecf6a25e146e8302f5292d40038eb53242a9aa5608854c9f657cff578c8255fbb6b2e3892d2ba3cb513c241f54f137c612d5d720e3b2c493796c2d22369ba524e4595efa469fd616430be621d054657f21bd5241eb3520e3bc95bbb386410e131b4174850152cc45652daac0dbec75aa08259b2e4c2ca36ee7661529483ecf88624847be755f308066850d82cb046feceac8b5acd82333de98fa7051e2f3d19f598af6a4a6a9da072be7e43c336a18fd2c2ec4ed4dd0b263e35f6902b49dc3312d&X-Goog-SignedHeaders=host",
];
const Summary = () => {
  return (
    <div className="summ container">
      <div className="summPosters">
        {posterSrc.map((poster) => {
          return <img src={poster} alt="" />;
        })}
      </div>
      <div className="lemonadeEp">
        <div className="lemonade">Lemonade</div>
        <div className="episode">
          Х.Энхжин: Тийрэлтэт онгоцны Монголын анхны эмэгтэй нисгэгч | S4:E5
        </div>
      </div>
    </div>
  );
};
export default Summary;
