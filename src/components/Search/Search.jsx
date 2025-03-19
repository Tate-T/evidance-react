import doctorPicture11x from "../../img/desktop/search/search-photo1@1x-desktop.webp";
import doctorPicture21x from "../../img/desktop/search/search-photo2@1x-desktop.webp";
import doctorPicture31x from "../../img/desktop/search/search-photo3@1x-desktop.webp";
import "./Seacrh.scss";

export const Search = () => {
  return (
    <section className="search">
      <div className="container">
        <div className="search__container">
          <div className="search__wrapper">
            <div className="search__text">
              <h2 className="search__title">Лікарі</h2>
              <ul className="search__list">
                <li className="search__item">
                  <p className="search__num">+100</p>
                  <p className="search__desc">досвідчених лікарів</p>
                </li>
                <li className="search__item">
                  <p className="search__num">
                    35<span class="search__small">років</span>
                  </p>
                  <p className="search__desc">середній стаж</p>
                </li>
              </ul>
            </div>
            <button className="search__btn">Знайти лікаря</button>
          </div>
          <ul className="search__photos">
            <li className="search__photo">
              <img
                src={doctorPicture11x}
                alt=""
                sizes=""
                srcset=""
                className="search__img"
              />
              {/* <img src={doctorPicture12x} alt="" media="min-width: 1200px" /> */}

              {/* <img
                src={doctorPictureMobile11x}
                alt=""
                sizes=""
                srcset=""
                media="min-width: 768px"
              />

               <img
                src={doctorPictureMobile12x}
                alt=""
                sizes=""
                srcset=""
                media="min-width: 768px"
              /> */}

              {/* 
             /* <picture>
                <source
                  srcset=` ${doctorPicture11x} 1x,${doctorPicture1x} 2x`
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="
                ./img/tablet/search/search-photo1@1x-tablet.webp 1x,
                ./img/tablet/search/search-photo1@2x-tablet.webp 2x
              "
                  media="(min-width: 768px)"
                />
                <source
                  srcset="
                ./img/mobile/search/search-photo1@1x-mobile.webp 1x,
                ./img/mobile/search/search-photo1@2x-mobile.webp 2x
              "
                  media="(max-width: 767px)"
                />
                <img
                  className="search__img"
                  alt="Веб-сайт Технокряк"
                  src="./img/mobile/search/search-photo1@1x-mobile.webp 1x"
                />
              </picture> */}
            </li>
            <li className="search__photo">
              <img
                src={doctorPicture21x}
                alt=""
                sizes=""
                srcset=""
                className="search__img"
              />
              {/* <img src={doctorPicture22x} alt="" /> */}
              {/* <picture>
                <source
                  srcset="
                ./img/desktop/search/search-photo2@1x-desktop.webp 1x,
                ./img/desktop/search/search-photo2@2x-desktop.webp 2x
              "
                  media="(min-width: 1766px)"
                />
                <source
                  srcset="
                ./img/tablet/search/search-photo2@1x-tablet.webp 1x,
                ./img/tablet/search/search-photo2@2x-tablet.webp 2x
              "
                  media="(min-width: 1334px)"
                />
                <source
                  srcset="
                ./img/mobile/search/search-photo2@1x-mobile.webp 1x,
                ./img/mobile/search/search-photo2@2x-mobile.webp 2x
              "
                  media="(max-width: 1333px)"
                />
                <img
                  className="search__img"
                  alt="Веб-сайт Технокряк"
                  src="./img/mobile/search/search-photo2@1x-mobile.webp 1x"
                />
              </picture> */}
            </li>
            <li className="search__photo">
              <img
                src={doctorPicture31x}
                alt=""
                sizes=""
                srcset=""
                className="search__img"
              />
              {/* <img src={doctorPicture32x} alt="" /> */}
              {/* <picture>
                <source
                  srcset="
                ./img/desktop/search/search-photo3@1x-desktop.webp 1x,
                ./img/desktop/search/search-photo3@2x-desktop.webp 2x
              "
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="
                ./img/tablet/search/search-photo3@1x-tablet.webp 1x,
                ./img/tablet/search/search-photo3@2x-tablet.webp 2x
              "
                  media="(max-width: 1199px)"
                />
                <img
                  className="search__img"
                  alt="Веб-сайт Технокряк"
                  src="./img/tablet/search/search-photo3@1x-tablet.webp 1x"
                />
              </picture>{" "} */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Search;
