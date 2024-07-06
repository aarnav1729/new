import React from "react";

const IdeaCards = ({ articles }) => {
  return (
    <div className="articles-container newroom mt-3">
      {articles.map((article, index) => (
        <a rel="bookmark noopener" href={article.url} target="_blank" className="newsroom_link">
          <article key={index} className="article   justify-content-b d-flex ">
            <div aria-label={` (opens in a new tab)`} className="img_container">
              <img
                className="img-fluid newsroom_image "
                src={article.image}
                alt=""
              />
            </div>
            <div className="d-flex justify-content-between flex-column content_scn">
              <div className="">
                <h2 className="text-start text-primary font-weight-bold mb-0 _title">
                  {article.title}
                </h2>
                <div className="d-flex align-items-center w-100 mt-1  ">
                  <div className=" font-weight-normal time">
                    <time dateTime={new Date(article.date).toISOString()}>
                      {article.date}
                    </time>
                  </div>
                  <div className=" font-weight-normal ms-2 ps-2  channel flex-grow-1 position-relative">
                    {article.channel}
                  </div>
                </div>
              </div>

              <a
                href={article.url}
                rel="noopener"
                target="_blank"
                aria-label="READ MORE "
                className="btn-4"
              >
                <span>Read more</span>
              </a>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
};

export default IdeaCards;
