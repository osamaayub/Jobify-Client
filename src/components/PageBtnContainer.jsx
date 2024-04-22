import { useLocation, useNavigate } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJob";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const PageBtnContainer = () => {
  const { data: numOfPages, currentPage } = useAllJobsContext();
  const Pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const { search, pathName } = useLocation();
  const navigation = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigation(`${pathName}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => (
    <button className={`btn page-btn ${activeClass ? 'active' : ''}`}
      key={pageNumber}
      onClick={() => handlePageChange(pageNumber)}
    >
      {pageNumber}
    </button>
  );

  const renderPageButtons = () => {
    const PageButtons = [];
    PageButtons.push({ pageNumber: 1, activeClass: currentPage === 1 });

    currentPage > 3 && PageButtons.push(<span className="page-btn dots">...</span>);

    currentPage !== 1 && currentPage === 2 && PageButtons.push(addPageButton({ pageNumber: currentPage - 1, activeClass: false }));

    (currentPage !== numOfPages && currentPage !== numOfPages - 1) && PageButtons.push(addPageButton({ pageNumber: currentPage - 1, activeClass: false }));

    currentPage < numOfPages - 2 && PageButtons.push(addPageButton({ pageNumber: numOfPages, activeClass: currentPage === numOfPages }));

    return PageButtons;
  };

  return (
    <Wrapper>
      <button className="btn prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          prevPage < 1 && (prevPage = currentPage);
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn btn-container">
        {renderPageButtons()}
      </div>
      <button className="btn next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          nextPage < 1 && (nextPage = numOfPages);
          handlePageChange(nextPage);
        }}
      >
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
