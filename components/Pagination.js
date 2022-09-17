import paginationStyles from "../styles/Pagination.module.css";
import ArrowRight from "../asset/images/ArrowRight.svg";
import ArrowLeft from "../asset/images/ArrowLeft.svg";
import Image from "next/image";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className={paginationStyles.pagination}>
        <div
          className={paginationStyles.arrow}
          onClick={() => paginate("left")}
        >
          <Image src={ArrowLeft} alt="left arrow" />
        </div>

        <div className={paginationStyles.dots_wrapper}>
          {pageNumbers.map((pageNumber, index) => (
            <div key={pageNumber} className="dot"></div>
          ))}
        </div>
        <div
          className={paginationStyles.arrow}
          onClick={() => paginate("right")}
        >
          <Image src={ArrowRight} alt="right arrow" />
        </div>
      </div>
      <style jsx>
        {`
          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #d1d3d4;
            cursor: pointer;
            margin-right: 10px;
          }
          .dot:nth-child(${currentPage}) {
            background-color: #a7a9ac;
            transition: 0.5s ease;
          }
          .dot:last-child {
            margin-right: 0;
          }
          @media only screen and (max-width: 450px) {
            .dot {
              width: 3px;
              height: 3px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Pagination;
